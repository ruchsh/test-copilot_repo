// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file to any user that accesses the root URL.

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Server is running on port', port);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/comments.html');
});

// Path: comments.html
// Create a web page
// Create a web page that displays a list of comments. The comments should be stored in an array and rendered to the page using an unordered list.

<!DOCTYPE html>
<html>
<head>
    <title>Comments</title>
</head>
<body>
    <h1>Comments</h1>
    <ul id="comments"></ul>
    <script>
        const comments = [
            'Comment 1',
            'Comment 2',
            'Comment 3'
        ];

        const commentsList = document.getElementById('comments');

        comments.forEach(comment => {
            const li = document.createElement('li');
            li.textContent = comment;
            commentsList.appendChild(li);
        });
    </script>
</body>
</html>

