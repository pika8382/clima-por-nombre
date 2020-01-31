const argv = require("yargs").options({
    nombre: {
        alias: "n",
        demand: true,
        desc: "Nombre de la ciudad a consultar"
    }
})

module.exports = {
    argv
}