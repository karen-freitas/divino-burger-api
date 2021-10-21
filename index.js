/* eslint-disable space-before-blocks */
/* eslint-disable global-require */
if (process.env.NODE_ENV !== 'production'){ require('dotenv').config(); }

const express = require('express');
const cors = require('cors');
const routes = require('./server/routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.get('*', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
