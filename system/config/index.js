require("dotenv").config();


/* 
var init = ini.parse(fs.readFileSync("system/config/config.ini","utf-8"));

 */

let api = {
    /* port:"4500",
    version: "v1.0.0",
    base:"/" */
    port:process.env.PORT,
    version: process.env.VERSION,
    base:process.env.BASE
};
/* let config = init.config; */

module.exports = {

    api
/*     config */
}