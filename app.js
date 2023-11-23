const express = require("express");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// listen for request
app.listen(3000);

app.use((req, res, next) => {
  console.log("new request made");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});

app.use((req, res, next) => {
  console.log("in the next middleware");
  next();
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
