
const http = require('node:http'); 
const addPassQuote = require('./quote');


const server = http.createServer((req, res) => {  
    if (req.method === 'POST') { //if client sends post request
        let body = [];
        req
        .on('error', er => { // event listener for 'error'
            console.error(er);
        })
        .on('data', chunk => { // event listener for 'data' - save chunks of data sent from the client into array
            body.push(chunk);
        })
        .on('end', () => { // event listener for 'end' of client request 
            body = Buffer.concat(body).toString(); // glue all the chunks of data together and convert to string
            let quote = JSON.parse(body); // parse JSON into JS object 
            addPassQuote.addQuote(quote); // add quote sent from the client to the array of quotes in quote module
            res.writeHead(200, {'Access-Control-Allow-Origin': '*'}); // send back success response to client
            res.end();
        });
    }
    else if (req.method === 'GET') { // if client sends get request
        res.writeHead(200, {'content-type':'application/json', 'Access-Control-Allow-Origin': '*'}); //send successful reponse 
        const quote = addPassQuote.getQuote(); //pass the quote from quote array in separate module
        res.end(JSON.stringify(quote)); // end the response by sending the quote to the client
    }
});
server.listen(8080); 