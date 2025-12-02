import cron from 'cron';
import http from 'http';
import { ENV } from './env.js';

// A simple cron job that runs every day at midnight
const job = new cron.CronJob("*/14 * * * *" , function () {

    http
    .get(ENV.API_URL, (res) => {
        if (res.statusCode === 200) {console.log("Get request sent successfully") }
        else { console.log(`Request failed with status code: ${res.statusCode}`); }
    })
    .on("error", (e) => {
        console.error(`Got error while sending request: ${e.message}`);
    });
   
});

export default job;