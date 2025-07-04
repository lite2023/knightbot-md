const axios = require('axios');

module.exports = async function (sock, chatId, city) {
    try {
        const apiKey = '4902c0f2550f58298ad4146a92b65e10';  // Replace with your OpenWeather API Key
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const weather = response.data;
        const weatherText = `الطقس في ${weather.name}: ${weather.weather[0].description}. درجه الحراره: ${weather.main.temp}°C.`;
        await sock.sendMessage(chatId, { text: weatherText });
    } catch (error) {
        console.error('في خطء الطقس مش باين عندي:', error);
        await sock.sendMessage(chatId, { text: 'اسف معرفتش اجيب الطقس فالوقت الحالي ده.' });
    }
};
