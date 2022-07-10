require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const {PORT, HOST, MONGO_URI} = require("./constants/constants");
const mainRouter = require('./routes');
const adminRoute = require('./routes/adminRoute');

const app = express();

app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))
app.use(express.json({limit:'1mb'}))
app.use(cors());

// connect to mongodb
mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(res => {
    console.log("connected to mongodb");
})
    .catch(err => {
        console.log(err);
    })

app.use(mainRouter);
app.use(adminRoute,function(req,res,next){
    next()
});
app.use('/uploads', express.static('uploads'));

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
); 
