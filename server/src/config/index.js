require('dotenv').config() // load .env file

module.exports = {
  port: 5000,
  app: process.env.APP,
  env: process.env.NODE_ENV,
  secret: "motherfucker",
  hostname: process.env.HOSTNAME,
  mongo: {
    uri: "mongodb://@localhost:27017/caca",
    testURI: process.env.MONGOTESTURI
  },
  transporter: {
    service: process.env.TRANSPORTER_SERVICE,
    email: process.env.TRANSPORTER_EMAIL,
    password: process.env.TRANSPORTER_PASSWORD
  }
}
