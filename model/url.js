const mongoose = require('mongoose');

const urls = mongoose.Schema({
    url: String
});

module.exports = mongoose.model('urls', urls);