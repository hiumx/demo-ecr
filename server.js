const express = require('express');
const os = require('os')

const HOST = '0.0.0.0'
const PORT = 8080

const app = express()

app.get('/', (req, res, next) => {
    res.send(
        `<body style='background-color:#283E5B'><h1 style='color: orange;text-align:center'>Hello HIUMX AWS ${os.hostname()}</h1></body>`
    );
})

app.listen(PORT, HOST, () => {
    console.log(`App running on port ${PORT}`);
})