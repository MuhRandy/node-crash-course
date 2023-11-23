const express = require("express");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// listen for request
app.listen(3000);

app.use((req, res) => {
  console.log("new request made");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
});

app.get("/", (req, res) => {
  const blogs = [
    { title: "Yada yada", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "Bla h blah", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "Mora Lisa", snippet: "Lorem ipsum dolor sit amet consectetur" },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

// Middleware is code which runs (on the server) between getting a request and sending a response
// Examples
// -Logger middleware to log details of every request
// -Authentication check middleware for protected routes
// -Middleware to parse JSON data from requests
// -Return 404 pages
