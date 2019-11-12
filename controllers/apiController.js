
const about = require('./about/about');

module.exports = function (app) {
    app.post('/about.json', about.about);
};