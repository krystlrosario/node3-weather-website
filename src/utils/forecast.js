// const request = require('request');

// const forecast = (longitude, latitude, callback) => {
//     const url = `http://api.weatherstack.com/current?access_key=0486f6999200ad88dbfc7900f5f95af5&query=${encodeURIComponent(longitude, latitude)}`;

//     request({url: url, json: true}, (error, response) => {
//         if(error) {
//             callback("Unable to connect with weather services", undefined);
//         } else if (response.body.error) {
//             callback("No matching results of the give coordinates.", undefined)
//         } else {
//             callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
//         }
//     })
// };

// module.exports = forecast;

////////////// DESTRUCTURING //////////////
const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=0486f6999200ad88dbfc7900f5f95af5&query=${encodeURIComponent(longitude, latitude)}`;

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback("Unable to connect with weather services", undefined);
        } else if (body.error) {
            callback("No matching results of the give coordinates.", undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
        }
    })
};

module.exports = forecast;