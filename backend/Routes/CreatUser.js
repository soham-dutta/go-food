const express = require('express');
const User = require('../models/User')
// const Order = require('../models/Orders')
const router = express.Router();
// const User=require('../models/User');
const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs')
// var jwt = require('jsonwebtoken');
// const axios = require('axios')
// const fetch = require('../middleware/fetchdetails');
// const jwtSecret = "HaHa";
router.post('/creatuser', [body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 3 })], async (req, res) => {
    // let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }
    // // console.log(req.body)
    // // let user = await User.findOne({email:req.body.email})
    // const salt = await bcrypt.genSalt(10)
    // let securePass = await bcrypt.hash(req.body.password, salt);
    try {
        await User.create({
            name: req.body.name,
            // password: req.body.password,  first write this and then use bcryptjs
            password: req.body.password,
            email: req.body.email,
            location: req.body.location
        }).then(
            res.json({ success:true })
        )
        .catch(err => {
            console.log(err);
            res.json({ error: "Please enter a unique value." });
        });
        
    }
    catch (error) {
        console.log(error.message);
    }
});
module.exports = router;