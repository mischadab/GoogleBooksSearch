const db = require('../models');

// methods for the book controller

module.exports = {
    // get all books in the database
    findAll: (req, res) => {
        db.Book.find(req.query)
        .then(bookDb => res.json(bookDb))
        .catch(err => res.json(err))
    },
    // find one book using id in database
    findById: (req, res) => {
        db.Book.findById(req.params.id)
        .then(bookDb => res.json(bookDb))
        .catch(err => res.json(err))
    },
    // create a new entry
    create: (req, res) => {
        db.Book.create(req.body)
         .then(bookDb => res.json(bookDb))
         .catch(err => res.json(err))
    },
    // update book
    update: (req, res) => {
        db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(bookDb => res.json(bookDb))
        .catch(err => res.json(err))
    }
}