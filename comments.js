//create web server
const express = require('express');
const app = express();
const port = 3000;
//create routes
app.get('/comments', (req, res) => {
    res.send('Comments');
});
//start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});