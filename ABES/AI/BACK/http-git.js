const http = require('http');
const axios = require('axios');
const port = 3001;
const server = http.createServer(async(req, res) => {
    console.log('Hello from the server!');
    res.writeHead(200, { "Content-Type": "text/html" });

    // const response = await fetch("https://dummyjson.com/products");
    // const data = await response.json();

    // const response = await axios.get("https://api.github.com/users");
    const response = await axios.get("https://api.github.com/search/users", {
        parms:{
            q:"location:ghaziabad"
        }
    });
    const newdata = pdata.data.items;
    // const gists_urldata = response.data;
    let frontdata = `<html><head></head><body>`
    newdata.forEach((product) => {
        frontdata+=`<div><img src="${product.avatar_url}"></div>`
    });
    frontdata += `</body></html>`;
    res.end(frontdata);
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
