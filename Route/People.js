const express = require('express');
const router = express.Router();
const {getData,postData,putData} = require('../controller/people');

router.get('/',getData);
router.post('/',postData);
router.put('/:id',putData);

module.exports = router;
