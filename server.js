const express = require("express");
const app = express();
const moment = require("moment")
const pug = require("pug");


app.use(express.static("public"));
app.set('view engine', 'pug');


app.get("/", (request, response) => {
     response.render(__dirname + "/views/index.pug", {
        javascript: moment.duration(moment().diff(new Date('1/19/2019'))).years() + " year, " + moment.duration(moment().diff(new Date('1/19/2019'))).months() + " months",
        java: moment.duration(moment().diff(new Date('09/26/2017'))).years() + " years, " + moment.duration(moment().diff(new Date('09/26/2017'))).months() + " months",
        html: moment.duration(moment().diff(new Date('06/8/2015'))).years() + " years, " + moment.duration(moment().diff(new Date('06/8/2015'))).months() + " months"
     }) 
});


const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
