var express = require("express");
var router = express.Router();
var mongojs= require("mongojs");

var db = mongojs("mongodb+srv://Priyanshu:Pmittal19%2A@cluster0.4druq.mongodb.net/taxiapp?retryWrites=true&w=majority",["bookings"]);

router.get("/bookings",function(req,res,next){
    //res.send("BOOK INGS");
    db.bookings.find(function(err,bookings){
        if(err){
            res.send(err);
        }
        res.json(bookings);
        console.log(res);
    });
});

router.post("/bookings",function(req,res,next){
    var booking=req.body;
    console.log(booking);
    console.log("innnnnnnnnnn");
    
    if(!booking.username){
        console.log('dfkd');
        res.status(400);
        res.json({
            error:"Bad data"
        });
    }
    else{
        console.log("ddd");
        db.bookings.save(booking,function(err,savedBooking){
            if(err)
            {
                res.send(err);
            }
            res.json(savedBooking);
        });
    }
});

module.exports = router;