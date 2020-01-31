const axios = require("axios");


const getLugarLatLong = async(nombre) => {
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${nombre}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': 'a0cfcadb9fmshd23f553d1aa647fp1295d0jsn103cb8cfce7e' }
    });

    const resp = await instance.get();

    if (resp.data.Results[0] === 0) {
        throw new Error(`No hay resultados del lugar ${nombre}`)
        return;
    }
    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const long = data.lon;
    return {
        name,
        lat,
        long
    }
}

module.exports = {
    getLugarLatLong
}