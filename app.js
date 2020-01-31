const argv = require("./config/yargs").argv;
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");


const endoceUri = encodeURI(argv.argv.nombre);

/* const vari = lugar.getLugarLatLong(endoceUri).then(resp => {
        console.log(`LUGAR : ${resp.name}`);
        console.log(`LATITUD : ${resp.lat}`);
        console.log(`LONGITUD : ${resp.long}`);
    })
    .catch(err => console.log("ERROR ERRROR !!!", err));

console.log(vari);


const climax = clima.getClima(5.060000, -75.519997).then(console.log)
    .catch(console.log);
 */
const getInfo = async(endoceUri) => {
    try {
        const coor = await lugar.getLugarLatLong(endoceUri);
        const temp = await clima.getClima(coor.lat, coor.long);
        return `La temperatura de ${endoceUri} es de ${temp} grados C`
    } catch (err) {
        return `Ha ocurrido un error!!!!!! :  ${err}`
    }

}

getInfo(endoceUri).then(console.log)
    .catch(console.log);