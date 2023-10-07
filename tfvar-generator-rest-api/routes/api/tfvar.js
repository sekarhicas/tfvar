var express = require('express');
const { body } = require('express-validator');
const { createTfvar } = require('../../controllers/tfvar.controller');
var router = express.Router();


 router.post('/', createTfvar);

  /*router.post('/', (req, res, next) => {
    console.log(req);
    //debugger;
    res.status(201).json({
      id: 101,
      ...req.body
    })
  })*/



module.exports = router;
