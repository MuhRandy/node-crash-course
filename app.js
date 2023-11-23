const express = require("express");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// listen for request
app.listen(3000);

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

// EJS Templates are processed through the EJS view engine on the server
