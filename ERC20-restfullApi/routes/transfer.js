const express = require('express');
const Controller = require("../controller/controller");
const router = express.Router();
require('dotenv').config();
router.get('/', (req,res) =>{
    //init();
    res.send("Hello, Please go to Post method");

    });
router.post('/', Controller.transfer);   
     
module.exports = router;