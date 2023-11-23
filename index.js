const geocode = require ('./app/actions/geocode')
const forecast = require('./app/actions/forecast')

const country = process.argv[2]
geocode ( country , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA  : " , data)

    if (data) {
        forecast( data.latitude , data.longtitude , (error , data) => {
            console.log("ERROR : " , error)
            console.log("DATA  : " , data)
       } )
    } else {
        console.log("Data Entered have An Error")
    }

} )

// const axios = require("axios");

// const address = "egypt";
// const geocodeUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//   address +
//   ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw";

// axios({url : geocodeUrl , json : true} )
//   .then(function (response) {
//     console.log(response.data.features[0].center[1]);
//   })
//   .catch(function (error) {
//    console.log(error);
//   });

