const express = require('express');
const router = express.Router();

router.get('/photo', function (request, response) {
    response.send("All photos")
});

router.get('/photo/:ID', function (request, response) {
    const ID = request.params.ID;
    response.send(ID)
});

router.post('/photo', function (request, response) {
    console.log(request.headers)
    console.log(request.body)
    response.json({ requestBody: request.body })
});

module.exports = router;