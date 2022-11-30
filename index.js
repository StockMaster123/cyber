const app = require('./src/app');
const express =  require('express');

const app = express();
const PORT = process.env.PORT || 200;

app.listen(PORT, ()=>{
    console.log('');
})
