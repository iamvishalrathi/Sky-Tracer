import "./SearchBox.css"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from "react";
import { getWeatherInfo } from "./Helper";

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async(event) => {
        try{
            event.preventDefault();
            let newInfo = await getWeatherInfo(city);
            updateInfo(newInfo);
            setCity("");
            setError(false);
        } catch(err){
            setCity("");
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