import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1580049904360-a9c3b79f86ff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return(<div className="InfoBox">
        
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity>80 ? <ThunderstormIcon/> : info.temp > 15 ? <LightModeIcon/> : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}} component={"spam"}>
          <div>
            <p>Temperature : {info.temp}&deg;C</p>
             <p>Humidity : {info.humidity}</p>
              <p>Min Temp : {info.tempMin}&deg;C</p>
              <p>Max Temp : {info.tempMax}&deg;C</p>
              <p>The weather can be described as <i>{info.weather}</i> and feels like : {info.feelslike}&deg;C</p>
          </div>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>)
}