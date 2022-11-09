// require('express-async-errors')
const express = require('express');
const timers_router = require('../../routers/timers');
const errorHandlerMW = require('../../middleware/error-handler');

const app = express();
app.use(express.json());
const port = 8080;

app.use('/api/v1', timers_router);
app.use(express.static('public'));

app.use(errorHandlerMW);

app.listen(port, () => {
  console.log(`The server is now running on port ${port}`);
});
