//const input = require("yargs");
//const ch = require("chalk");
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';

const argv = yargs(hideBin(process.argv)).parse();

// weather for st louis
function displayWeather(){
    console.log("Test");
    const Branson = {
        temperature : 80,
        humidity : 75,
        feelsLike : 85,
        airQuality : "Poor"
    }
    const StLouis = {
        temperature : 82,
        humidity : 77,
        feelsLike : 89,
        airQuality : "Fair"
    }
}


if (argv.city === "StLouis"){
    console.log(chalk.blue("Weather: 80 degrees Humidity: 77"));
}

/* Package.json keeps an update log of what dependencies your file is using, and sharing the information.
Keeps track of dev dependencies as well.
Node modules should be included in ignore because it's a tool to transfer the data between different parts of the program.
It would be a waste of memory on computers that do not need to access it.
npm install helped us to install modules that we needed to use
*/