const request = require("request");

const API_KEY = "2c2d83816e90444c9ba135033232311";

const forecast = (latitude, longtitude, callback) => {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=" +
    API_KEY +
    "&q=" +
    latitude +
    "," +
    longtitude;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect weather service", undefined);
    } else if (response.body.error) {
      callback(response.body.error.message, undefined);
    } else {
      callback(
        undefined,
        response.body.location.name +
          " It Is  " +
          response.body.current.condition.text +
          " And Temp   " +
          response.body.current.temp_c
      );
    }
  });
};

module.exports = forecast;
