import { useState } from "react";

export default function WeatherWidget() {

    const [zip, setZip] = useState("")
    const [data, setData] = useState({})

    const fetchData = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'us-weather-by-zip-code.p.rapidapi.com',
                'X-RapidAPI-Key': 'e11b380b03msh46d1353ac5cd827p1d9fe4jsn0d877383e74c'
            }
        };
        
        fetch(`https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode?zip=${zip}`, options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));

    }

    return (
        <div className="weather-wrapper">
            <h3>Weather</h3>
            <div className="input">
                <label>Enter zip code:</label> <br/>
                <input type="text" onChange={e => setZip(e.target.value)}/>
            </div>
            <div className="button">
                <button onClick={fetchData}>Query</button>
            </div>
            <div className="body-wrapper">
                {data ? 
                <div className="details-wrapper">
                    <div className="detail">Location: <b>{data.City}, {data.State}</b></div>
                    <div className="detail">Weather: {data.Weather}</div>
                    <div className="detail">Temperature: {data.TempF}° F</div>
                    <div className="detail">Sunrise: {data.Sunrise} am</div>
                    <div className="detail">Sunset: {data.Sunset} pm</div>
                </div>
                 : null}
            </div>
        </div>
    )
}