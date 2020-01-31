const axios = require("axios");

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4b90f8ed723fff55e182119c9e1f5863&units=metric`);
    /*     console.log("resp.data.main.temp " + resp.data.main.temp); */
    return resp.data.main.temp;
}

const getInfo = async(nombre) => {

}

module.exports = {
    getClima
}