var express = require('express');
var router = express.Router();

var ReferenceController = require('./controller/referenceController');

router.post('/getCountries', ReferenceController.getCountries);

module.exports = router;