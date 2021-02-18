const { response } = require("express");
const express = require("express");
const https = require("https")

const app = express();


app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&&appid=77a651bad1324b64ccbf6392884bb908";
    
    https.get(url, function(response){
        console.log(response.statusCode)
        
            response.on("data", function(data){
        const weatherData= JSON.parse(data);
        const temp = weatherData.main.temp
        const weatherDescription = weatherData.weather[0].description;
            res.send("<h1>The temperature in London is "+ temp+ " degrees Celcius</h1>")
            })
    })

   
})


app.listen(3000, function(){
    console.log("Server running on port 3000")
})