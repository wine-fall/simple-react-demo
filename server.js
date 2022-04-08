const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.redirect('./index.html');
});

app.listen(8080, () => {
    console.log('start the server')
});