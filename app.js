var express = require('express');
var request = require('request');
var app = express();

//Importing Routes
const weatherRoute = require('./weather');

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
//Set view engine
app.set('view engine','ejs');

//Middleware
app.use('/',weatherRoute);


app.listen(PORT, () => {
    console.log(`server is starting at port ${PORT}`);
});

// app.get('/', (req,res) => {

//     var city = req.query.city;
//     var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d3e3827b9c18394b25f8c2171c672bd`;
//     console.log(city);
    // request(url,(error,response,body) => {
    //     weather_json = JSON.parse(body);
        // console.log(weather_json);

        // var weather = {
        //     city: city,
        //     temp: weather_json.main.temp,
        //     icon: weather_json.weather[0].icon,
        //     des: weather_json.weather[0].description 
        // };

        // var weather_data = {weather : weather};

        // res.render('index');
    // });

    
// });
