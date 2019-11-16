const superagent = require('superagent');

const burl = "api.openweathermap.org/data/2.5/weather";
const appid_weather = "5395bcad51f4b37afe5b814977728a96";

exports.weather = async function weather(req, res) {
    const {q} = req.query;
    console.log("le debug lol", req.user.weather_city)
    if (!q || !appid_weather) {
        return res.status(400).json({
            text: "Invalid request city can not be null!"
        });
    }
    superagent.get(`${burl}`)
        .query({q: q, appid: appid_weather, units: "metric"})
        .end((err, resp) => {
            if (err) {
                return res.status(200).json(resp.body);
            }
            console.log(resp.body);
            return res.status(200).json(resp.body);
        });
}
