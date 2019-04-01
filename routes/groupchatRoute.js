const config = require('../config/database'); 
const ChatDetails=require('../models/chatDetails');
module.exports = (router) => {


  router.post('/savechat', (req, res) => {
          console.log("request printed is" , req.body)
          let chatdetails = new ChatDetails({
            tripId: req.body.tripId,
            chatId : req.body.chatId,            
            text: req.body.text,
            date: req.body.date,
            senderId:req.body.senderId,
            receiverId:req.body.receiverId
          });
          // Save user to database
          chatdetails.save((err) => {
            if(err){
               console.log("not saved here"+ err)

                  res.json({ success: false, message: 'Could not save chat. Error: ', err }); // Return error if not related to validation
                } else {
                 console.log("saved here")

                  res.json({ success: true, message: 'chat Saved' }); // Return success
                }
          });
  });


//   router.post('/groupchatdetails',(req,res) =>{
//     console.log("ing group chat post method")
//     let groupchatdetails = new GroupChat({
//       tripId: req.body.tripId,
//       chatId: req.body.chatId
//     });

//     groupchatdetails.save((err)=>{
//       if(err){

//            res.json({ success: false, message: 'Could not save chat id and trip id. Error: ', err }); // Return error if not related to validation
//          } else {
//            // console.log("nothere"+groupchat)

//            res.json({ success: true, message: 'tripid and chat id Saved' }); // Return success
//          }
//     });
//   }
// );

router.get('/getAll121Chats' ,(req,res) => {
  
  console.log(req.query.senderId);
 
  ChatDetails.find({ senderId: req.query.senderId,tripId: ""}, (err, chat) => {
        // Check if error was found
        if (err) {
          res.json({ success: false, message: err }); // Return error
        } else {
          // Check if username was found
          if (!chat) {
            res.json({ success: false, message: 'Username not found to find trips.' }); // Return error
          } else {
            res.json({ data: chat
            });
          }
          }
        });  // .sort({'txdate':-1})
      });

      router.get('/getAll121ChatsReceiver' ,(req,res) => {
  
        console.log(req.query.receiverId);
       
        ChatDetails.find({ receiverId: req.query.receiverId,tripId: ""}, (err, chat) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: err }); // Return error
              } else {
                // Check if username was found
                if (!chat) {
                  res.json({ success: false, message: 'Username not found to find trips.' }); // Return error
                } else {
                  res.json({ data: chat
                  });
                }
                }
              });  // .sort({'txdate':-1})
            });



      router.get('/get121Chats' ,(req,res) => {
  
        console.log(req.query.senderId);
        console.log(req.query.receiverId);
        ChatDetails.find({$or:[ {senderId: req.query.senderId, receiverId: req.query.receiverId},{receiverId: req.query.senderId, senderId: req.query.receiverId}]}, (err, chat) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: err }); // Return error
              } else {
                // Check if username was found
                if (!chat) {
                  res.json({ success: false, message: 'Username not found to find trips.' }); // Return error
                } else {
                  res.json({ data: chat
                  });
                }
                }
              });  // .sort({'txdate':-1})
            });


      router.get('/getchatByTripId' ,(req,res) => {
  
        console.log(req.query.tripId);
       
        ChatDetails.find({ tripId: req.query.tripId}, (err, chat) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: err }); // Return error
              } else {
                // Check if username was found
                if (!chat) {
                  res.json({ success: false, message: 'Username not found to find trips.' }); // Return error
                } else {
                  res.json({ data: chat
                  });
                }
                }
              });
            });
  return router; 
}
