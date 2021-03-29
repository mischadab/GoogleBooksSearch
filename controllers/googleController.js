const axios = require('axios');
const { model } = require('mongoose');
const db = require('../models');

// methods for the google controller 
module.exports = {
    findAll: (req, res) => {
        const { query: params } = req;
        axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${params}&orderBy=newest&langRestrict=en&maxResults=9`)
        .then(results => 
            results.data.items.filter(),
                result => {
                    result.volumeInfo.title
                } 
            )
    }
}