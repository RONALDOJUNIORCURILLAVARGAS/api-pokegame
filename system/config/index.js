require("dotenv").config();


let api = {
    port:process.env.PORT,
    version: process.env.VERSION,
    base:process.env.BASE
};


module.exports = {
    api
}