#! /usr/bin/env node
import chalk from "chalk";
import showBanner from "node-banner";
async function myBanner() {
    await showBanner("\nCountdown Timer", chalk.blue("Welcome!"), "white");
}
await myBanner();
let startdate_countdown = new Date("March 18, 2023  12:00").getTime();
let interval = setInterval(function () {
    let today = new Date().getTime();
    let diffin_millisec = startdate_countdown - today;
    let days = Math.floor(diffin_millisec / (1000 * 60 * 60 * 24));
    console.log(days);
    let hours = Math.floor((diffin_millisec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours);
    let minutes = Math.floor((diffin_millisec % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes);
    let seconds = Math.floor((diffin_millisec % (1000 * 60)) / 1000);
    console.log(seconds);
    console.log(chalk.cyanBright(`${days} "d " ${hours} "hrs " ${minutes} "min " ${seconds} "sec.`));
    if (diffin_millisec < 0) {
        clearInterval(interval);
        console.log("Expired");
    }
}, 1000);
