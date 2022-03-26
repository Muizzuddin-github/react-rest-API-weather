const Wheater = (props) => {
    return ( 
                <div className="weather">
                    <h5 className="card-title">{props.data.name}</h5>
                    <div className="body">
                        <img src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`} alt="icon of API open weather map" width="80px"/>
                        <p className="card-text">Temp {props.data.temp} °C</p>
                        <p className="card-text">Humadity {props.data.humidity} %</p>
                        <p className="card-text">Wind Speed {props.data.windSpeed} km/h</p>
                        <p className="card-text">Description {props.data.description}</p>
                    </div>
                </div>

     );
}
 
export default Wheater;