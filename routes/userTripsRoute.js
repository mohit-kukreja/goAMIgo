const UserTrips = require('../models/usertrips'); 
const config = require('../config/database'); 

module.exports = (router) => {


  router.post('/tripdetails', (req, res) => {
          let usertrip = new UserTrips({
            name: req.body.name,
            source: req.body.source,
            destination: req.body.destination,
            todate: req.body.todate,
            fromdate: req.body.fromdate,
            lone: req.body.lone,
            tripId: req.body.tripId,
            members: req.body.members,
            budget: req.body.amount
          });
          // Save user to database
          usertrip.save((err) => {
            if(err){
                  res.json({ success: false, message: 'Could not save trip. Error: ', err }); // Return error if not related to validation
                } else {
                  res.json({ success: true, message: 'Trip Saved' }); // Return success
                }
          });


  });
  router.get('/tripdetailsByName' ,(req,res) => {
  
   
    UserTrips.find({ name: req.query.username }, (err, usertrips) => {
          // Check if error was found
          if (err) {
            res.json({ success: false, message: err }); // Return error
          } else {
            // Check if username was found
            if (!usertrips) {
              res.json({ success: false, message: 'Username not found to find trips.' }); // Return error
            } else {
              res.json({ data: usertrips
              });
            }
            }
          });
        });    
        router.get('/tripdetails' ,(req,res) => {
  
   
          UserTrips.find({ tripId: req.query.tripId }, (err, usertrips) => {
                // Check if error was found
                if (err) {
                  res.json({ success: false, message: err }); // Return error
                } else {
                  // Check if username was found
                  if (!usertrips) {
                    res.json({ success: false, message: 'Username not found to find trips.' }); // Return error
                  } else {
                    res.json({ data: usertrips
                    });
                  }
                  }
                });
              });    
      

              router.get('/destination' ,(req,res) => {

                console.log("request from destination",req.query.name);
       
              
       
              UserTrips.find({ destination: new RegExp(req.query.name,'i'), lone: "lone",name: {$ne : req.query.username}}, (err, usertrips) => {
       
                      // Check if error was found
       
                      if (err) {
       
                        res.json({ success: false, message: err }); // Return error
       
                      } else {
       
                        // Check if username was found
       
                        if (!usertrips) {
       
                          res.json({ success: false, message: 'destination not found to find trips.' }); // Return error
       
                        } else {
       
                          res.json({ data: usertrips
       
                          });
       
                        }
       
                        }
       
                      });
       
                    });
       
       
       

              router.put('/usertripwithimageid', (req, res) => {

                console.log(req.body.tripId, "in usertriproute")
                UserTrips.findOneAndUpdate({tripId: req.body.tripId }, {$push:{imgName:req.body.imgName, imgPath:req.body.imgPath}},{new: true},function(err,trips){
                    if(err){
                      res.send("error in updating trip img id")
                    }else{
                      res.send("updated imgid in user trip table")
                    }
                  });
                });

                router.put('/updatetrip', (req, res) => {
                 

                  console.log("outside tripId "+ req.body.tripId+" members "+req.body.members)
                  // Save user to database

                  // UserTrips.findOne({tripId: req.body.tripId},function(err,UserTrips,callback){
                  //     UserTrips.members = req.body.members;
                  //     UserTrips.save(callback);
                  // });

                  UserTrips.update({tripId: req.body.tripId}, { $set: {members : req.body.members}},(err) => {
                    console.log(" inside tripId "+ req.body.tripId+" members "+req.body.members);
                    if(err){
                          res.json({ success: false, message: 'Could not save trip. Error: ', err }); // Return error if not related to validation
                        } else {
                          res.json({ success: true, message: 'Trip Saved' }); // Return success
                        }
                  });
              
              
              });
  return router; 
}

