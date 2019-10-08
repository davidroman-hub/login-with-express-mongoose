// aqui iran las urls de mi pagina principal etcc slash about
//const router = require('express').Router(); primera forma de escribir el ruteador
const express = require('express');
const router = express.Router();

router.get('/',(resq, res) =>{
    res.send('Indexx');
})

router.get('/about', (req, res) =>{
    res.send('About') /* asi cuando nosotros en nuestra pagina visitemosn index/about = aparecera About ya que
    estamos creando otra ruta */
})
module.exports = router;