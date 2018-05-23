const fs = require('fs');

const express = require('express'); 
const cors = require('cors'); 
const PORT = 3000;
const HOST = '0.0.0.0';
const app = express();
const progress = require('progress-stream');
app.use (cors({credentials: true, origin: true}) );





app.get("/:id", (req, res) => {
    console.log("get", req.params); 


    res.end();
});

app.post ("/:id", (req, res, next) => {


    var str = progress({
        length: req.headers["content-length"],
        time: 100 /* ms */
    });

    req.pipe(str).pipe(fs.createWriteStream("./output" + Math.random()));

    str.on ("progress", function(progress) {
        console.log("progress", progress); 
    }); 

    str.on ("end", () => {
        res.end(); 
    }); 

}); 

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
