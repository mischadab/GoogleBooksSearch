const path = require('path');
const router = require("express").Router();
const apiRoutes = require('./api');


// api 
router.use('./api', apiRoutes);


// if no api routes render the react app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'))
})

module.exports = router;