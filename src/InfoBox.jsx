//Card Components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//Icons
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';

import './InfoBox.css'
import {weatherImage} from './Helper'

export default function InfoBox({ info }) {
    let img= weatherImage(info);
    
    return (
        <div className="InfoBox">
            <div className='card-container'>
                <Card style={{ width: "30vw" }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={img || "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city && `${info.city[0].toUpperCase()}${info.city.slice(1).toLowerCase()}`}&nbsp;
                            {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <LightModeIcon/>: <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temp: {info.temp}&deg;C</p>
                            <p>Humidity: {info.humidity}</p>
                            <p>Temp Min: {info.tempMin}&deg;C</p>
                            <p>Temp Max: {info.tempMax}&deg;C</p>
                            <p>Feels Like: {info.feelsLike}&deg;C</p>
                            <p>Weather Type: {info.weather}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}