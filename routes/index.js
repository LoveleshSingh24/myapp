var express = require('express');
var router = express.Router();

/* GET home page. */
let landing = require('../controllers/landing')
router.get('/',landing.get_landing);
router.post('/',landing.submit_lead);

module.exports = router;

