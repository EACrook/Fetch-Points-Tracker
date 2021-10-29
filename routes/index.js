const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    // will indicate if there is a 404 message if the route does not exist
    res.status(404).end();
});

module.exports = router; 