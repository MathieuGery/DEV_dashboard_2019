const account = require('./account/lib');
const about = require('./about/about');

module.exports = function (app) {
    app.post('/login', account.login);
    app.post('/signup', account.signup);
    app.post('/about.json', about.about);
};