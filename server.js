const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("Content-Type", "text/html");

  // send an html file
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data);
      // if you just pass one data, you can do it on end method instead
      res.end(data);
    }
  });
});

// localhost is like a domain name on the web, but the domain is from our own computer
// Port number are like 'doors' into a computer, as your port number doesnt clash on other port numbers it can be used
server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
