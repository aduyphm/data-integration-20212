const mongoose = require("mongoose");
const {GENDER_MALE, GENDER_FEMALE, GENDER_SECRET} = require("../constants/constants");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    gender: {
        type: String,
        enum: [GENDER_MALE, GENDER_FEMALE, GENDER_SECRET],
        required: false,
        default: GENDER_SECRET
    },
    birthday: {
        type: Date,
        required: false
    },
    adress: {
        type: String,
        required: false
    },
    avatar: {
        type: String
    }
});

usersSchema.set('timestamps', true);
module.exports = mongoose.model('user', userSchema);