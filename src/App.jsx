import { WeatherCard, WeatherCardModal } from './components/weatherCard'
import { promiseLocation } from './utils/promiseLocation'
import { yandexWeatherApiCall } from './utils/yandexWeatherApiCall'

const LOCATION = await promiseLocation()
const weatherAPI = await yandexWeatherApiCall(LOCATION.latitude, LOCATION.longitude)

// console.log(weatherAPI)
function App() {

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center">
        <WeatherCard
          city={weatherAPI.data.geo_object.district.name}
          tempC={weatherAPI.data.fact.feels_like}
          condition={weatherAPI.data.fact.condition}
          refreshable={false}
          forecasts={weatherAPI.data.forecasts}
          modal={WeatherCardModal}
        />
      </div>

    </>
  )
}

export default App
