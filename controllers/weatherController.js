const axios = require('axios');

const predictWeather = async (req, res) => {

    try {
        
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.weatherInput}&units=metric&appid=${process.env.WEATHER_API_KEY}`);

        res.status(200).send({
            success: true,
            message: 'weather details fetched successfully',
            data: response.data
        });

    } catch (error) {

        res.status(500).send({
            success: false,
            message: 'Invalid City Input or the Weather API has reached its daily limit.'
        });

    }

};


module.exports = {
    predictWeather
};