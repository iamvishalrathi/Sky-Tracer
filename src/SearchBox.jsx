import "./SearchBox.css"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from "react";
import { colors } from "@mui/material";
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "b740cbe6e99800167ea96ccbb7fd6c03";

    let getWeatherInfo = async () => {
        try{
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let resJson = await res.json();
            let result = {
                city: city,
                temp: resJson.main.temp,
                tempMin: resJson.main.temp_min,
                tempMax: resJson.main.temp_max,
                humidity: resJson.main.humidity,
                feelsLike: resJson.main.feels_like,
                weather: resJson.weather[0].description,
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async(event) => {
        try{
            event.preventDefault();
            // console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err){
            setError(true);
        }
    }
    return (
        <div className="SearchBox">
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br />
                <br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}