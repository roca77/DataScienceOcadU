let express = require("express");
let cors = require('cors');
let app = express();

app.use(cors())

app.use('http://localhost:81', cors(), function(req, res, next) {
    console.log(`${new Date()} - ${req.method} request for ${req.url}`);
    next(); // pass control to the next handler
});

app.use(express.static("../static"));

app.listen(81, function(){
    console.log("Serving static on 81")
});