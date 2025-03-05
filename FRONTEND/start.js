const express = require("express")

const app = express()

app.use("/",express.static("./static"))

app.listen(3100,function(){
    console.log("web server is listening 3100 port ...")
})

/*
url
http://127.0.0.1:3100/index.html

http://127.0.0.1:3100/

http://127.0.0.1:3100

*/