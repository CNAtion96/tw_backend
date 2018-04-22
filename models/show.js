"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showSchema = new Schema({
    location: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    buyTickets: {
        type: Boolean
    },
    ticketLocation: {
        type: String
    }
});

module.exports = mongoose.model('show', showSchema);