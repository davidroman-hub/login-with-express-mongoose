// el se puede autenbticar, slash login slash register etc..
const express = require('express');
const router = express.Router();


router.get('/users/signin', (req,res)=>{
    res.send('ingresando a la APP');
})

router.get('/users/signup', (req,res)=>{
    res.send('Formulario de la authentication')
})

module.exports = router;