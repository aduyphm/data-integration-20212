const Admin = require('../models/Admin');
const { createJwtToken } = require('../utils/auth');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const SendEmail = require('../utils/sendEmail');
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// login - dang nhap
const login = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ msg: 'Invalid input, please check your data' });
    }
    if (!req.headers.authorization) {
        const { email, password } = req.body;
        let admin;
        try {
            admin = await Admin.findOne({ email: email });
        } catch (error) {
            console.log(error)
        }
        if (!admin) {
            return res.json({ status: 'fail', msg: 'email not found' })
        }
        let check = false;
        try {
            check = await bcrypt.compare(password, admin.password);
        } catch (err) {
            console.log(err)
        }
        if (!check) {
            return res.json({ status: 'fail', msg: 'Password is not match!' })
        }

        let token = createJwtToken(admin._id);
        return res.json({ status: "success", token: token, data: admin });
        
    } else {
        const token = req.headers.authorization.split(' ')[1];
        if (token) {
            jwt.verify(token, "kiendao2001", function (err, decodedToken) {
                if (err) {
                    return res.json({ status: 'fail', msg: "Invalid token" })
                }
                Admin.findOne({ _id: decodedToken.adminID }, (err, doc) => {
                    if (err) {
                        return res.json({ status: 'fail', msg: 'server error' })
                    } else if (doc) {
                        return res.json({ status: 'success', msg: "login successfully!", token: token, data: doc })
                    }
                })
            });
        }
    }
}

//forget password - quen mat khau
const forgetPass= async(req,res)=>{
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin)
        return res.status(200).json({ status: 'fail', msg: 'Email not found' });
    const n = crypto.randomInt(100000, 999999);
    console.log(n);
    const newpass = await bcrypt.hash(n.toString(), 12);
    await SendEmail(admin.email, "Your new password", n);
    await Admin.findOneAndUpdate({ email: admin.email }, { password: newpass }, { new: true }).then(doc => {
        res.json({ status: true, msg: 'Check your email to receive new password' })
    })
}

exports.login = login;
exports.forgetPass = forgetPass;