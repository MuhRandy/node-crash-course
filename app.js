const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// express app
const app = express();

// connect to mongodb
const dbURI =
  "mongodb+srv://newdev0027:181101@cluster0.wqnnoge.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(morgan("dev"));

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

// Mogoose is an ODM library - Object Document Mapping library

// Schemas defines the structure of atype of data/document
// -Properties & property types

// Models allow us to communicate with database collections
