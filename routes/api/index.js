const path = require('path');
const router = require("express").Router();
const bookApiRoutes = require('./books');
const googleApiRoute = require('./google')

// book routes
router.use('/books', bookApiRoutes)

// google route
router.use('/google', googleApiRoute)