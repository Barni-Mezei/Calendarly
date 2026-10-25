const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

// Start the HTTP server
const PORT = process.env.PORT || 5500; // $PORT env. variable, or 5500
let server = app.listen(PORT, function () {
    console.log("Server running on port:", PORT);
});

server.keepAliveTimeout = 12000;

// Setup express.js
app.set("views", "./public");
app.set("view engine", "pug");

// Everzthing in the `public` directory is served
app.use(express.static("public"));

const router = express.Router();

app.use("/", router);

/**
 * Prevent users from seeing restricted content by hitting the browser"s back button
 */
router.use(function (req, res, next) {
    res.set("Cache-Control", "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0");
    next();
});

//***************
//* GET methods *
//***************

router.get("/", function (req, res) {
    res.render("index");
});


router.get("/index", function (req, res) {
    res.render("index");
});
