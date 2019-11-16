const about = require('./about/about');
const api = require('../server/services/api');
const auth = require('../middlewares/authorization');

module.exports = function (app) {
    app.get('/about.json', about.about);
    app.get('/rss', api.rss);
    app.post('/weather', auth(), api.weather);
};