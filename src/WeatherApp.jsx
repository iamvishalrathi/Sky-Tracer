import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useEffect, useState } from "react";
import {getWeatherInfo} from './Helper'
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]= useState({});

    let updateInfo= (updateInfo)=>{
        setWeatherInfo(updateInfo);
    }

    useEffect(()=>{
        async function fetchData(){
            let result = await getWeatherInfo("Delhi");
            setWeatherInfo(result);
        }
        fetchData();
    },[]);
    
    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App by Vishal</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}