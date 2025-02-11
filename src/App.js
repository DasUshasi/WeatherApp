import './App.css';
import MountCountryFunc from './components/MountCountryFunc';

function App() {
  let key_openweathermap = process.env.REACT_APP_KEY_OPENWEATHERMAP;
  let key_weatherapi = process.env.REACT_APP_KEY_WEATHERAPI;
  let key_ipgeolocation = process.env.REACT_APP_KEY_IPGEOLOCATION

  return (
    <div id="App">
      <div id='heading'>WEATHER APP</div>
      <MountCountryFunc countryname={'India'} cityname={'Kalyani'} key_openweathermap={key_openweathermap} key_weatherapi={key_weatherapi} key_ipgeolocation={key_ipgeolocation} />
    </div>
  );
}

export default App;
