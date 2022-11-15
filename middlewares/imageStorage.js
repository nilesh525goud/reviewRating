const multer = require("multer");
const path = require("path");

// image storeage path
const imgconfig=multer.diskStorage({
    destination: (req, file, callback)=>{
        console.log("file --", file);
        console.log(path.join(__dirname, "..","/uploads/"));
        callback(null,path.join("..", "/uploads/"));
        
       },
         filename:(req,file,callback)=>{
            var ext = file.origional.name.substring(file.origionalname.indexOf("."));
            callback(null, `image_${date.now()}.${file.origionalname}`);
         },
    });


const isImage = (req, file,callback) =>{
    if (file.mimetype.startsWith("image")){
        callback(null, true);
    }else{
        callback(new Error("only image is not allowed"))
    }
};

const upload = multer({
    storage : imgconfig,
    fileFilter : isImage,
});
module.exports={
upload,
};
