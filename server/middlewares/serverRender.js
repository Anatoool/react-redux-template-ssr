import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';

// import our main App component
import App from '../../src/app';
import { configureStore } from '../../src/store';

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {

  // point to the html file created by CRA's build tool
  const filePath = path.resolve('./build/assets/index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }

    // configure store
    const initialState = {
      ideasState: {
        list: {
          ideas: [
            { _id: 'dscsdcdcs', title: 'title', description: 'description' },
          ]
        },
      }
    };
    const store = configureStore(initialState);
    const reduxState = store.getState();

    const stringifiedReduxState = JSON.stringify( reduxState );

    // render the app as a string
    const context = {};
    const html = ReactDOMServer.renderToString(
      <React.Fragment>

        <StaticRouter location={req.url} context={context}>
          <Provider store={store}>
            <App />
          </Provider>
        </StaticRouter>
      </React.Fragment>
    );

    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div><script>window.REDUX_STATE = ${stringifiedReduxState};</script>`
      )
    );
  });
}