import express from 'express';
import serverRender from './middlewares/serverRender';
import path from 'path';
const compression = require('compression');

const PORT = 3001;
const app = express();
app.disable('x-powered-by');
app.use(compression());

const router = express.Router();

router.use('/assets', express.static(path.resolve('./build/assets')));
router.get('/*', serverRender);

app.use(router);

app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));