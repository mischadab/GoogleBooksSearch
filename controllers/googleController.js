const axios = require('axios');
const db = require('../models');

// methods for the google controller 
module.exports = {
    findAll: (req, res) => {
        const { query: params } = req;
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${params}&orderBy=newest&langRestrict=en&maxResults=9`)
            .then(results =>
                results.data.items.filter((result) => {
                    result.volumeInfo.title &&
                        result.volumeInfo.infoLink &&
                        result.volumeInfo.authors &&
                        result.volumeInfo.description &&
                        result.volumeInfo.imageLinks &&
                        result.volumeInfo.thumbnail
                })

            )
            .then((booksApi) =>
                db.Book.find().then((booksDb) =>
                    booksApi.filter((bookApi) =>
                        booksDb.every((bookDb) =>
                            bookDb.googleId.toString() !== bookApi.id)
                    )
                )
            )
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err))
    }
}
