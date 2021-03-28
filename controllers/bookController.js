const db = require('../models');

// methods for the book controller

module.exports = {
    findAll: (req, res) => {
        db.Book.find(req.query)
        .then(bookDb => res.json(bookDb))
        .catch(err => res.json(err))
    }
}