const http = require('node:http'); //required an 'http' module from node and stored in object http
const fs = require('node:fs'); // imported a 'fs'module (contains functions for file system) from node and stored in fs

const server = http.createServer((req, res) => {  // creating a server, takes a function as a paramter - this function takes request and response parameters (http. - like this. in Java)
    fs.readFile('serverTest.html', (err, data) => { // reading a file, added function for error 
        res.writeHead(200, {'content-type':'text/html'}); // writing header (HTTP status code (200 = successful), {type of data we are sending back, in this case it's text/html})
        res.write(data);//send the data from the file to the client
        res.end();//end the reponse 
    });
});
server.listen(8080); // listen to the client at port 8080