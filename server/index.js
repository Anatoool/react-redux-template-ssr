import express from 'express';

const PORT = 3001;
const app = express();

app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));