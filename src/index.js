import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import config from './config/config.js';

const { port } = config;
const app = express();

app.use(express.json());
app.use(cors());

app.disable('x-powered-by'); // For security
app.use(express.urlencoded({ extended: false })); // for proper parsing of query strings
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`App is listening on port ${port}`);
});
