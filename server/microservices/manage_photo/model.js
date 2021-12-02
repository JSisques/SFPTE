const constants = require("../../util/constants");
const fs = require('fs');

class Model{

    async save() {
        const tmpDir = constants.uploadImagePathTmp;
        //const tmpDir = constants.uploadImagePathTmp;
        fs.readdir(tmpDir, (err, files) => {
            files.forEach(file => {
              console.log(file);
            });
          });
    }
}

module.export = Model