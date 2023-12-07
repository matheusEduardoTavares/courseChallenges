const express = require('express');
const {router, middlewares} = require('./routes');

const app = express();
app.use(express.json());

app.use(middlewares);
app.use(router);

const port = 3000

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})