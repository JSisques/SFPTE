const express = require('express');
const router = express.Router();
const multer = require('multer');
const constants = require('../../util/constants');
const ExifImage = require('exif').ExifImage;
const fs = require('fs');

const Model = require('./model').Model


const storage = multer.diskStorage({
    destination: function (request, file, cb) {
        var dir = constants.uploadImagePathTmp;

        if(!fs.existsSync(dir)){
            fs.mkdir(dir, err => cb(err, dir));
        } else{
            cb(null, dir);
        }
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
    console.log("Entrado en metodo POST");
    console.log(request.body)
    console.log(request.headers)
    console.log(request.files);
    response.json({ requestBody: "OK" })
});

module.exports = router;