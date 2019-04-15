import express from 'express';
import serverRender from './middlewares/serverRender';
import path from 'path';

const PORT = 3001;
const app = express();


const router = express.Router();

router.get('*', serverRender);
router.use(express.static(path.resolve(__dirname)));
app.use(router);

app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));