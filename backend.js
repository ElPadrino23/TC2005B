let log = console.log;

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    log(req.url);
    res.setHeader("content-type", "text/html; charset=utf-8");
    
    if (req.url === '/archivo') {
        res.write(fs.readFileSync('./archivo.txt', 'utf-8'));
    } else {
        res.write(fs.readFileSync('./index.html', 'utf-8'));
    }
    res.end();
});

server.listen(4141, () => {
    log("Mi servidor está vivo corriendo en el puerto 4141");
});