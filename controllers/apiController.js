const about = require('./about/about');
const api = require('./services/api');

module.exports = function (app) {
    app.get('/about.json', about.about);
    app.get('/rss', api.rss);
    app.post('/weather', api.weather);
};