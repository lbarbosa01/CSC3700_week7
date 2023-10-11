const express = require("express");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");

app.use( bodyParser.urlencoded({extended: false})); // middleware for body
app.use( express.static( path.join(__dirname, 'public')));
app.use( adminRoutes.routes);
app.use( shopRoutes);

app.use( ( req, res, next ) => {
    res.status(404).send("<h2> Request not found </h2>")
})

let port = 3001;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);
