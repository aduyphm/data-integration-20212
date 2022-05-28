const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    category: {
        type: String,
        require: true
    }
})

const category = mongoose.model('CategoriesModel', categorySchema);

module.exports = category;