const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: { type: String },
    link: { type: String },
    thumbnail: { type: String },
    sapo: { type: String },
    category: { type: String },
    source: { type: String },
    release_time: { type: Date }
});

const article = mongoose.model('article', articleSchema);

module.exports = article;