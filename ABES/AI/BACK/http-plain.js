const http = require('http');
const server = http.createServer((req, res) =>
{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Const-Type', 'Text/html');
    res.write("<h1>Hello, world!</h1>");
    res.end();
});
port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port $ {port}`);
});