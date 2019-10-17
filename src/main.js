const Twitter = require("twitter");
const express = require("express");
const path = require("path");

const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
const app = express();
const port = 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'ui.html')));
app.get('/tweets', (req, res) => {
    client.get("search/tweets", {
        q: req.query.search,
        result_type: 'recent',
        since_id: req.query.sinceId,
        count: req.query.count || 3
    }, (err, tweets) => res.send(tweets.statuses))
});
app.listen(port, () => console.log(`Tweet wall is listening on 0.0.0.0:${port}!`));
