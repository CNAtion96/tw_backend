const cors = require('cors')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const show = require('./models/show');

mongoose.connect('mongodb://CNAtion96:Cwim19967@ds151433.mlab.com:51433/tw_shows');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Get all of shows
app.get('/show',function(req,res){
  project.find().exec((err,response)=>{
    if(err) return res.json({err});
    res.json(response);
	})
})

// Get a single show
app.get('/show/:id',function(req,res){
	let id = req.params.id
	project.findById(_id=id).exec((err,response)=>{
		if(err) console.log(err)
		res.send(response)
	})
})

// Post a new show
app.post('/show',function(req,res){
  let Project = new project({
    "location": req.body.location,
    "date": req.body.date,
    "time": req.body.time,
    "buyTickets": req.body.buyTickets,
    "ticketLocation": req.body.ticketLocation,
  });
  Project.save(err=>{
    if(err) return res.json({err});
    project.find().exec((err,response)=>{
      if(err) res.json({err});
      res.json(response);
    });
  });
})

// Delete a show
app.delete('/show/:id',function(req,res){
  let id = req.params.id;
  project.remove({_id:id}).exec((err)=>{
    if(err) return res.json({err});
    project.find().exec((err,response)=>{
      if(err) return res.json(err);
      res.json(response);
    })
  });
  
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});