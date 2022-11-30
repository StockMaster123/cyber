const express =  require('express');

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 200;

app.get('/', (req, res) =>{
    res.send('Hola Mundo');
})

app.listen(PORT, ()=>{
    console.log('');
})
