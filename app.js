var express = require("express");
var app = express();

app.get("/api/whoami", function(req, res){
    var obj = {
        "ipaddress": req.headers["x-forwarded-for"],
        "language": req.headers["accept-language"].split(',')[0],
        "software": req.headers["user-agent"].split(' (')[1].split(")")[0]
    }
   res.send(obj); 
});

// Start server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server stated!");
});