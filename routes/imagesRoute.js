var express = require('express');
var router = express.Router();
var multer = require('multer');
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var path = require('path');
var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');


//path and originalname are the fields stored in mongoDB
const imageSchema = new Schema({
 path: {
 type: String, required: true, trim: true
 },
 originalname: {
 type: String,
 required: true
 },
 tripId: {
  type: String
 }
});
 
var Image = module.exports = mongoose.model('files', imageSchema);
 
router.getImages = function(callback, limit) {
 
 Image.find(callback).limit(limit);
}
 
 
router.getImageById = function(id, callback) {
  
 Image.findById(id, callback);
}
 
router.addImage = function(image, callback) {
 Image.create(image, callback);
}


cloudinary.config({ 
  cloud_name: 'mohit', 
  api_key: '419446653928311', 
  api_secret: 'ILsA7EaV0a5ixD817dykvTKGEvE' 
});

 
 
var storage = cloudinaryStorage({
 cloudinary: cloudinary,
 folder: function(request, file, callback) {
 callback(undefined, 'uploads');
  console.log("in multer storage", file)
 },
 filename: function(req, file, cb) {
 cb(null,file.originalname);
 
 }
});


var imgpath = {};

var upload = multer({
  storage: storage
 });



router.post('/imgtodb', upload.any(), function(req, res, next) {

 res.send(req.files);
 console.log("cloudinary url")
 var path = req.files[0].secure_url;
 console.log("url ofafter multer", path)
 var imageName = req.files[0].originalname;
 var tripId = req.body.tripId;
 console.log("trip id in image route", tripId);
 var imagepath = {};
 imagepath['path'] = path;
 imagepath['originalname'] = imageName;
 imagepath['tripId']=tripId;
 this.imgpath = imagepath;

cloudinary.uploader.upload(imageName, function(result) { 
});

 router.addImage(imagepath, function(err) {
    
 });

});


router.get('/getimages', (req, res) => {
  // Search database for all blog posts
  console.log("trip id in /getimages", req.query.tripId)
  Image.find({tripId: req.query.tripId}, (err, images) => {
    // Check if error was found or not
    if (err) {
      res.json({ success: false, message: err }); // Return error message
    } else {
      // Check if blogs were found in database
      if (!images) {
        res.json({ success: false, message: 'No images found.' }); // Return error of no blogs found
      } else {
        res.json({ success: true, images: images }); // Return success and blogs array
      }
    }
  }).sort({ '_id': -1 }); // Sort blogs from newest to oldest
});

router.get('/getimages/_id', (req, res) => {
  Image.findById({_id: req.params.id},(err,images) => {
    if (err) {
      res.json({ success: false, message: err }); // Return error message
    } else {
      // Check if blogs were found in database
      if (!images) {
        res.json({ success: false, message: 'No images found.' }); // Return error of no blogs found
      } else {
        res.json({ success: true, images: images }); // Return success and blogs array
      }
    }
  });
});
module.exports = router;

