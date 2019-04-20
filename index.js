const express = require("express");

const app = express();

app.get("/", function(req, res){
   res.send("Hello my name is Deeven Paul");
});

app.listen(3000, function(){
  console.log("Server successfully running on port 3000");
});
