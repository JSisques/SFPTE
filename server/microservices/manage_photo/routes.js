const express = require('express');
const router = express.Router();
const multer = require('multer');
const constants = require('../../util/constants');


const storage = multer.diskStorage({
    destination: function (request, file, cb) {
        cb(null, constants.uploadImagePath);
    },
    filename: function(request, file, cb){
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
})

router.get('/photo', function (request, response) {
    response.send("All photos")
});

router.get('/photo/:ID', function (request, response) {
    const ID = request.params.ID;
    response.send(ID)
});

router.post('/photo', upload.array(constants.uploadImageField), function (request, response) {
    console.log(request.files);
    console.log(request.headers)
    console.log(request.body)
    response.json({ requestBody: request.body })
});

module.exports = router;