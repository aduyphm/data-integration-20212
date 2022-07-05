const AdminController = require('../controllers/AdminController');
const express= require('express');
const router= express.Router();


router.post('/api/v1/admin/login', AdminController.login);
router.post('/api/v1/admin/forgetpass', AdminController.forgetPass);

module.exports= router;
