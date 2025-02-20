// Create web server
// Use express to create server
const express = require('express');
const app = express();

// Use body-parser to parse the body of the request
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Use express-handlebars to render the view
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Use express-session to manage session
const session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

// Create a list of comments
const comments = [
    { name: 'John', content: 'Hello!' },
    { name: 'Mary', content: 'Hi!' }
];

// Display the comments
app.get('/comments', function(req, res) {
    res.render('comments', { comments: comments });
});

// Add a comment
app.post('/comments', function(req, res) {
    comments.push({ name: req.body.name, content: req.body.content });
    res.redirect('/comments');
});

// Start the server
app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});
