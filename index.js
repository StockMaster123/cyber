const express = require('express');
const app = express();

const port = process.env.PORT || 200;

app.listen(port);

app.get('/', (req,res) => {
    res.send('Hola Mundo');
})
