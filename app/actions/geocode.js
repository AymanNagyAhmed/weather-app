const request = require("request");
const  ACCESS_TOKEN = 'pk.eyJ1IjoidGVzdHdvOTAiLCJhIjoiY2xwYjl1bTN3MGQ5NDJycXR0ZGJlNXZxcyJ9.oLUPKtIY8xB5kcrdTJa3aQ'


const geocode = (address, callback) => {
  const geocodeUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token="+ ACCESS_TOKEN;

  request({ url: geocodeUrl, json: true }, (error, response) => {
    if (error) {
      callback("nable to connect geocode Service", undefined);
    } else if (response.body.message) {
      callback(response.body.message, undefined);
    } else if (response.body.features.length == 0) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        longtitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
      });
    }
  });
};

module.exports = geocode;
