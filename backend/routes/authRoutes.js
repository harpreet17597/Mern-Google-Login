const express = require('express');
const router = express.Router();

const authControllr = require('../controllers/authController');

router.get('/test',(req,res) => {
    return res.send('This is test route')
});

router.get('/google',authControllr.googleLogin);

module.exports = router;