//Modules- these are the packages required..
const http = require("http"); // - comes with everything we need to start the server, listen and respond to network requests
const fs = require("fs"); // - comes with everything we need to access the disk on server
const url = require("url"); //- client makes request via url
const querystring = require("querystring"); //- query parameters that are part of the request
const figlet = require("figlet"); //- takes a string and turns it into a fancier 404
// add path for images



const hostname = '127.0.0.1';
const port = 8000;
//creates the server send the http header http status 200 ok, content type/ text plain.
//creates the path
const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  // write the html to the page
 if (page === "/") {
        fs.readFile("index.html", function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
     // else if that writes data to the server
 } else if (page === '/api') {
     if ("student" in params) {
         if (params["student"] == "dominos"){
             res.writeHead(200, { "Content-Type": "application/json" });

             const objToJson = {
                 pizzaPlace: "You Are A #100Dev!",
             };
             res.end(JSON.stringify(objToJson));
         } else if (params["student"] !== "dominos") {
             res.writeHead(200, { "Content-Type": "application/json" });
             const objToJson = {
                 pizzaPlace: "What are ya doin'? You got GOT!",
             };
             res.end(JSON.stringify(objToJson));
         }
     }
    //else if's and elses that deals with error messages
  } else if (page == "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });

  } else {
    figlet("404!!", function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(port, hostname, () => {
    console.log(`Psst, it's working. Server running at http://${hostname}:${port}/`);
})






