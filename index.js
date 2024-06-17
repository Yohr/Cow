
const cowsay = require("cowsay");
const info = require("./information");

console.log(cowsay.say({
    text: `Helloooooo, my name is ${info.name} and I am froooooom ${info.campus} campuuuuuuuus!`,
    e: "oO",
    T: "U "
}));
