const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("Content-Type", "text/html");

  res.write("<head><link rel='stylesheet' href='#'></head>");
  res.write("<p>Hello, Randy<p>");
  res.write("<p>Hello again, Randy<p>");
  res.end();
});

// localhost is like a domain name on the web, but the domain is from our own computer
// Port number are like 'doors' into a computer, as your port number doesnt clash on other port numbers it can be used
server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
