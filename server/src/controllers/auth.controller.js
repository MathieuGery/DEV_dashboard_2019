'use strict'

const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const config = require('../config')
const httpStatus = require('http-status')
const uuidv1 = require('uuid/v1')
const superagent = require('superagent');

const burl = "api.openweathermap.org/data/2.5/weather";
const appid_weather = "5395bcad51f4b37afe5b814977728a96";

exports.register = async (req, res, next) => {
  console.log("__________DEBUG__________")
  try {
    const activationKey = uuidv1()
    const body = req.body
    console.log(req.body);
    body.activationKey = activationKey
    const user = new User(body)
    const savedUser = await user.save()
    res.status(httpStatus.CREATED)
    res.send(savedUser.transform())
  } catch (error) {
    return next(User.checkDuplicateEmailError(error))
  }
}

exports.login = async (req, res, next) => {
  try {
    const user = await User.findAndGenerateToken(req.body)
    const payload = {sub: user.id}
    const token = jwt.sign(payload, config.secret)
    return res.json({ message: 'OK', token: token })
  } catch (error) {
    next(error)
  }
}

exports.confirm = async (req, res, next) => {
  try {
    await User.findOneAndUpdate(
      { 'activationKey': req.query.key },
      { 'active': true }
    )
    return res.json({ message: 'OK' })
  } catch (error) {
    next(error)
  }
}

exports.weather = async function weather(req, res) {
  const {q} = req.query;
  console.log(q, appid_weather);
  if (!q || !appid_weather) {
    return res.status(400).json({
      text: "Invalid request city can not be null!"
    });
  }
  superagent.get(`${burl}`)
      .query({ q: q, appid: appid_weather, units: "metric" })
      .end((err, resp) => {
        if (err) { return res.status(200).json(resp.body); }
        console.log(resp.body);
        return res.status(200).json(resp.body);
      });
}
