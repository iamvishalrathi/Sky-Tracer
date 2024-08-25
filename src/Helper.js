let getWeatherInfo = async (city) => {
    try{
        const key = import.meta.env.VITE_API_KEY;
        const url = import.meta.env.VITE_API_URL;

        let res = await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
        let resJson = await res.json();
        console.log(resJson);
        let result = {
            city: city,
            temp: resJson.main.temp,
            tempMin: resJson.main.temp_min,
            tempMax: resJson.main.temp_max,
            humidity: resJson.main.humidity,
            feelsLike: resJson.main.feels_like,
            weather: resJson.weather[0].description,
        };
        return result;
    }catch(err){
        throw err;
    }
}

export {getWeatherInfo};