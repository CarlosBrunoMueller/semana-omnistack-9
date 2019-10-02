const express = require('express')


const app = express();

app.get('/', (req, res) => { 

    res.json({message : "Hello Teste"});

});

app.listen(3333);