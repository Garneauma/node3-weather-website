const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const key = '72217187852209fc3e361e8e110fc545'
    const url = 'http://api.openweathermap.org/data/2.5/weather?lon=' + encodeURIComponent(longitude) + '&lat=' + encodeURIComponent(latitude) + '&units=Metric&appid=' + key

    request({ url, json: true }, (error, {body}) => {
        //console.log(response.body)
        if (error) {
            callback('Unable to connect to weather services.', undefined)
        } else if (body.message) {
            callback('Unable to find location. Try again with a different search term.', undefined)
        } else {
            callback(undefined, body.weather[0].main + '. It is currently ' + Math.round(body.main.temp) + ' degrees out. It feels like ' + Math.round(body.main.feels_like) + ' degrees.')
        }
    })
}

module.exports = forecast