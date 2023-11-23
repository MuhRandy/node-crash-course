const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

// localhost is like a domain name on the web, but the domain is from our own computer
// Port number are like 'doors' into a computer, as your port number doesnt clash on other port numbers it can be used
server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});

// Status Code
// Status code describe the type of response sent to the browser

// 200 - OK
// 301 - Resource moved
// 404 - Not Found
// 500 - Internal server error

// 100 Range - informational responses
// 200 Range - success codes
// 300 Range - codes for redirects
// 400 Range - user or client error codes
// 500 Range - server error codes

// when you want to create your project just run 'pnpm init' and package.json will be created
