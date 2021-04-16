const { createFile } = require("./Helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

createFile(argv.b, argv.l, argv.h)
    .then(fileName => console.log(fileName, 'Creado :D'))
    .catch(console.log);





