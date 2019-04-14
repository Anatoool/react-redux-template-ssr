import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button } from 'components';
import { withRouter } from 'react-router-dom';
import { CLIENT_PAGES } from 'common';
import { parse, stringify } from 'qs';

import './search-form.sass';

@withRouter
export class SearchForm extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  };

  static defaultProps = {
    history: {},
  };

  state = {
    q: '',
  };

  componentDidMount() {
    const { history } = this.props;
    const { location } = history;
    const { search = '' } = location;
    const queries = parse(search, { ignoreQueryPrefix: true });
    const { q } = queries;
    this.setState({ q });
  }

  handleChange = (event) => {
    this.setState({ q: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { q } = this.state;
    const { history } = this.props;
    const queries = stringify({ q });
    const url = `${CLIENT_PAGES.SEARCH}?${queries}`;
    history.push(url);
  };

  render() {
    const { q } = this.state;
    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <TextInput
          name="q"
          className="_search"
          placeholder="Search"
          onChange={this.handleChange}
          defaultValue={q}
        />
        <Button
          type="submit"
          className="_search"
          clickAreaSize={40}
        >
          <i className="material-icons md-18">
            search
          </i>
          <span className="d-none-on-mobile">Search</span>
        </Button>
      </form>
    );
  }
}
