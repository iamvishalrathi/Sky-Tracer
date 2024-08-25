import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]= useState({})

    let updateInfo= (updateInfo)=>{
        setWeatherInfo(updateInfo);
    }

    
    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App by Vishal</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}