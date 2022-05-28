require('dotenv').config();

// User Model
// gender
const GENDER_MALE = 'Nam';
const GENDER_FEMALE = 'Nữ';
const GENDER_SECRET = 'Tùy chỉnh';

// role
const ROLE_USER = 'customer'; // user : only login to client website
const ROLE_ADMIN = 'admin'; // admin : full roles in admin website

// path
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

module.exports = {
    GENDER_FEMALE,
    GENDER_MALE,
    GENDER_SECRET,
    ROLE_ADMIN,
    ROLE_USER,
    MONGO_URI,
    PORT
}