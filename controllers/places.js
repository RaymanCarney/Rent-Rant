const router = require('express').Router()

// GET /places
app.get('/', (req, res) => {
    res.render('places/index', { places })
})

module.exports = router