import { Button } from './components/button/Button'
import { getlatAndLong } from './api/getLatAndLong'
import { getWeather } from './api/getWeather'
import { PageWrapper } from './components/pageWrapper/PageWrapper'
import { CustomInput } from './components/input/CustomInput'
import { CustomSelect } from './components/select/CustomSelect'
import { useEffect, useState } from 'react'
import { ContentWrapper } from './components/contentWrapper/ContentWrapper'
import { LocationDiv } from './components/locationDiv/LocationDiv'
import { TempDiv } from './components/tempDiv/TempDiv'
import { WeatherDiv } from './components/weatherDiv/WeatherDiv'
import { WindSpeedDiv } from './components/windSpeedDiv/WindSpeedDiv'
import { ErrorMessage } from './components/errorMessage/ErrorMessage'
import { TitleContainer } from './components/title/Title'

function App() {
  const [countryCode, setCountryCode] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [weatherData, setWeatherData] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  }, [error])

  return (
    <PageWrapper weatherStatus={weatherData && weatherData.cod === 200 ? weatherData.weather[0].main : ''}>
      <ContentWrapper>
        <CustomSelect
          onChange={e => {
            setCountryCode(e.target.value.slice(0, 2))
          }}
        />
        <CustomInput
          type={'text'}
          onChange={e => {
            setZipCode(e.target.value)
          }}
        />
        {/*  id of custom select+ on key press?  key code 13? enter   */}
        <Button
          onClick={async () => {
            const [lat, long] = await getlatAndLong({
              countryCode,
              zipCode,
            })
            console.log(long, lat)

            if (lat === undefined || long === undefined) {
              setError(true)
              return
            }

            const result = await getWeather({ lat, long })
            setWeatherData(result)

            console.log(weatherData)
            if (result.cod === '400') {
              setError(true)
            }
          }}
        />
        <LocationDiv location={weatherData.name} />
        {error ? <ErrorMessage opacity={1} /> : <ErrorMessage opacity={0} />}
      </ContentWrapper>

      <div
        style={{ display: 'flex', justifyContent: 'space-between', minWidth: '70%', minHeight: '20%', padding: '50px' }}
      >
        <TitleContainer flexType={'column'} title={'Temperature'}>
          <TempDiv temp={weatherData?.cod === 200 ? weatherData.main.temp : ''} />
        </TitleContainer>
        <TitleContainer flexType={'column'} title={'Weather'}>
          <WeatherDiv weather={weatherData && weatherData.cod === 200 ? weatherData.weather[0].main : ''} />
        </TitleContainer>
        <TitleContainer flexType={'column'} title={'Wind Speed'}>
          <WindSpeedDiv windSpeed={weatherData && weatherData.cod === 200 ? weatherData.wind.speed : ''} />
        </TitleContainer>
      </div>
    </PageWrapper>
  )
}

export default App
