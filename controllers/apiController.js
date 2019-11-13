const about = require('./about/about');
const api = require('./services/rss/rss');

module.exports = function (app) {
    app.get('/about.json', about.about);
    app.get('/rss', api.rss);
};