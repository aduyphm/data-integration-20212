const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    source: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    }
})

const url = mongoose.model('UrlModel', urlSchema);

module.exports = url;