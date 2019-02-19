var mongoose = require('../config/connectdb');

var cardSchema = new mongoose.Schema({
    card_number: {
        type: String,
        required: true
    },
    expiry_date: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

card = mongoose.model('card', cardSchema);

module.exports = card;