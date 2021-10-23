const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/curso-mern', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  //useFindAndModify: false
}, function(err) {
  if(err) {
    console.log(err);
  }else {
    console.log('MongoDB conectado com sucesso!!')
  }
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/', function(req, res) {
  res.json({message: 'Helo World'});
}); 

app.listen(port, function() {
  console.log(`Server running on port ${port}`)
});