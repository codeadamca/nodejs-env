var http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});

    let passwordLength = new String(process.env.DB_PASSWORD).length;
    let password = "*".repeat(passwordLength);

    let content = "<h1>Environment Variables</h1>";
    content += "<h2>Host: " + process.env.DB_HOST + "</h2>";
    content += "<h2>Database: " + process.env.DB_DATABASE + "</h2>";
    content += "<h2>Username: " + process.env.DB_USERNAME + "</h2>";
    content += "<h2>Password: " + password + "</h2>";

    res.end(content);
}).listen(8080);