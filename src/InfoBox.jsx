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

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VtbWVyJTIwZmFybXxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1611492935712-8b93ad48080f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbiUyMHVtYnJlbGxhfGVufDB8fDB8fHww";
    return (
        <div className="InfoBox">
            <div className='card-container'>
                <Card style={{ width: "30vw" }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL: COLD_URL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}&nbsp;
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