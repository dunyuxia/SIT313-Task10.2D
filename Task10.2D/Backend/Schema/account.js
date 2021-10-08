const mongoose = require('../mongoose'), Schema = mongoose.Schema;

const AccountSchema = new Schema({
    country: {type: String, trim: true, required: true,},
    firstname: {type: String, trim: true, required: true,},
    lastname: {type: String, trim: true, required: true,},
    email: {type: String, match: /^[A-Za-z0-9]+([_.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/},
    password: {type: String, minlength: 8, required: true,},
    address: {type: String, trim: true, required: true,},
    city: {type: String, trim: true, required: true,},
    state: {type: String, trim: true, required: true,},
    postalCode: {type: Number, match: [/^\d{4}$/, "An Australian postal code must be of 4-digits"]},
    mobile: {type: String, match: [/^04\d{8}$/, "An Australian mobile phone number must starts with 04 and be of totally 10-digits"]},
}, {timestamps: {createdAt: 'created', updatedAt: 'updated'}});

module.exports = mongoose.model('Account', AccountSchema);