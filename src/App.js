import Navbar from './components/Navbar';
import './App.css';
import Introduction from './components/Intoduction';
import Search from './components/Search';
import Wheater from './components/Weather';
import Footer from './components/Footer';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [loc,setLoc] = useState('')
  const [dataWheater,setDataWeather] = useState({})
  const [showWeather,setShowWeather] = useState(false)

  useEffect(() => {
    if(loc){

      const apiKey = '6f54a31234d67b05beca1467edd2803c'
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=${apiKey}`)
      .then(res => res.json())
      .then(res => {
        const data = {
          name : res.name,
          temp : res.main.temp,
          humidity : res.main.humidity,
          description : res.weather[0].description,
          icon : res.weather[0].icon,
          windSpeed : res.wind.speed
        }
        setDataWeather(data)
        setShowWeather(true)
        document.querySelector('.input-group input').value = ''
      })
      .catch(err => alert('Sorry Location not found'))


    }
  },[loc])

  return (
    <div className=''>
      <Navbar />

      <section className='resLaptop' >
        <Introduction />
        <section className='viewWeather'>
           <Search serc={(value) => setLoc(value)}/>

            <section className='infoWeather'>
              {
                showWeather ? <Wheater data={dataWheater} /> : ""
              }
            </section>
        </section>
      </section>

      <Footer />
    </div>
  );
}

export default App;
