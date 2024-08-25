import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]= useState({
        city: "Wonderland",
        temp: 25.5,
        tempMin: 25.5,
        tempMax: 25.5,
        humidity: 47,
        feelsLike: 25.5,
        weather: "haze",
    })

    let updateInfo= (updateInfo)=>{
        setWeatherInfo(updateInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}