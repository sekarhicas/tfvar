const { validationResult } = require('express-validator');
var http = require('http');
const axios = require('axios');

exports.createTfvar = async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req.body);

  //write tfvar logic here

  const getData = async (body) => {
    const options = {
      'method': 'GET',
      'url': 'http://localhost:9090/api/employee/emp',
      'headers': {
        'Content-Type': 'application/json'
      },
      data: {
        body
      }
    };

    try {
      const result = await axios(options);
      //console.log(result);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }

  const response = await getData(req.body);
  console.log(response);

  //"start": "nodemon bin/www --exec babel-node bin/www"

  res.status(201).json({...response})
}