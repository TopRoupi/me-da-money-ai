var express = require('express');
var router = express.Router();
var card = require('../model/card');

router.post('/creditcard/novo', async (req, res, next)  => {
    console.log('insenting');
    try{
        var item = await card.create(req.body);
        console.log('inserted');
        return res.send('inserted');
        console.log(req.body);
    } catch (err){
        console.log('erro');
        return res.status(400).send({err});
    }
});

router.get('/creditcard/novo', async (req, res, next)  => {
    res.send('oi');
});

module.exports = router;