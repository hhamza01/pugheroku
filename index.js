const  express = require('express');
const app = express();
const path = require('path');
const NewsAPI = require('newsapi');
var port = process.env.PORT || 5000
const newsapi = new NewsAPI('4a77e09f6b884fbb93db536ffe8ac917');

let articles;
newsapi.v2.sources({
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response.sources[0]);
  articles = response.sources[0];
});

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index', {title: JSON.stringify(articles)["totalResults"],
     paragraf: JSON.stringify(articles)});

});


app.listen(port);
