var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World. Does it work??");
});

app.listen(8000);
