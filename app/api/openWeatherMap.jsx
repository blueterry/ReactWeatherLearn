var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric';
const API_KEYS ='cdc53c14a7c5913991f39c1cb532aa70';


module.exports = {

    getTemp: function(location){
        var encodedLoc = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLoc}&appid=${API_KEYS}`;

        return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error('err1'+res.data.message);

            } else{
                return res.data.main.temp;
            }

        },function(err){
            throw new Error('err2'+err);
        });
    }
}