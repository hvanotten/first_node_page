

//Modules- these are the packages required..
const http = require('http'); // - comes with everything we need to start the server, listen and respond to network requests
const fs = require('fs') // - comes with everything we need to access the disk on server
const url = require('url');//- client makes request via url
const querystring = require('querystring');//- query parameters that are part of the request
const figlet = require('figlet')//- takes a string and turns it into a fancier 404
//creates the server
const server = http.createServer((req, res) => {
  //what path are they on?
  const page = url.parse(req.url).pathname;
  //what query parameters are there? yoinks them
  const params = querystring.parse(url.parse(req.url).query);
  //print the page to
  console.log(page);

  //conditionals to handle server response 'you clicked on some thing and some thing ran'
    // everyone else your name take character, pizza place and tv show gives back 100 devs tag
    // if pizza place is anything other than dominos === 'pizza snob'
    // if tv show matches anything other bachelor  === 'tv snob'
    // if conditions match leon status return 'you are a true 100Dev!'
    if (page === "/") {
        //respond with html file
        fs.readFile("index.html", function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    }

    else if (page == "/api") {
    if ("student" in params) {
      if (params["student.pizzaPlace"] == "dominos") {
        res.writeHead(200, { "Content-Type": "application/json" });

        const objToJson = {
            pizzaPlace: `${pizzaPlace}`,
            tvShow: `${tvShow}`,
        };
        res.end(JSON.stringify(objToJson));
      } //student = leon
      else if (params["student"] != "dominos") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
            pizzaPlace: `${pizzaPlace}`,
            tvShow: `${tvShow}`,
        };
        res.end(JSON.stringify(objToJson));
      } //student != leon
    } //student if
  } //else if
  else if (page == "/css/style.css") {
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
    //else that deals with error message
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

server.listen(8000);
