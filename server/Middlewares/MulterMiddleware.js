const multer=require("multer")
const path = require('path');

const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, "uploads");
        },
        filename: function (req, file, cb) {
          const fileName = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
          cb(null, fileName);
        },
      });
  
  const upload = multer({ storage: storage ,limits: {
    fileSize: 2000000000, // 2000MB file size limit
  },})

  module.exports=upload