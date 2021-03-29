const path = require('path');
const router = require("express").Router();
const bookApiRoutes = require('./books');
const googleApiRoute = require('./google')

// book routes
router.use('/books', bookApiRoutes)

// google route
router.use('/google', googleApiRoute)

// for all other requests, render the html
router.use((req, res => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
}))

module.exports = router;