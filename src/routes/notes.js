// urls de mi servidor para crear o manejar sus notas , eliminar crear o manejar
const express = require('express');
const router = express.Router();
router.get('/notes', (req, res) => {
    res.send('Notes from Database');
})

module.exports = router;