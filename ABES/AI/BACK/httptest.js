const http = require('http');
const fspromises = require('fs/promises');
const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'Text/html')
});