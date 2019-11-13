var Feed = require('rss-to-json');

async function rss(req, res) {
    let result = await Feed.load('https://learnstartup.net/feed/');
    try {
        return res.status(200).json(
            {result}
        );
    } catch (error) {
        return res.status(500).json({
            error
        });
    }
}

exports.rss = rss;