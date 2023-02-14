const router = require('express').Router();


const { predictWeather } = require('./../controllers/weatherController');


router.post('/predictweather', predictWeather);


module.exports = router;