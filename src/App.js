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
import { TitleContainer } from './components/title/TitleContainer'

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

  const getWeatherData = async () => {
    const [lat, long] = await getlatAndLong({
      countryCode,
      zipCode,
    })

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
  }

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
          onKeyDown={e => {
            if (e.key === 'Enter') {
              getWeatherData()
            }
          }}
        />

        <Button onClick={getWeatherData} />
        <LocationDiv
          color={weatherData && weatherData.cod === 200 ? weatherData.weather[0].main : ''}
          location={weatherData.name}
        />
        {error ? (
          <ErrorMessage color={weatherData && weatherData.cod === 200 ? weatherData.weather[0].main : ''} opacity={1} />
        ) : (
          <ErrorMessage color={weatherData && weatherData.cod === 200 ? weatherData.weather[0].main : ''} opacity={0} />
        )}
      </ContentWrapper>

      <div
        style={{
          display: 'flex',
          minHeight: '20%',
          padding: '50px',
        }}
      >
        <TitleContainer
          color={weatherData && weatherData.cod === 200 ? weatherData.weather[0].main : ''}
          flexType={'column'}
          title={'Temperature'}
        >
          <TempDiv
            color={weatherData && weatherData.cod === 200 ? weatherData.weather[0].main : ''}
            temp={weatherData?.cod === 200 ? weatherData.main.temp : ''}
          />
        </TitleContainer>
        <TitleContainer
          color={weatherData && weatherData.cod === 200 ? weatherData.weather[0].main : ''}
          flexType={'column'}
          title={'Weather'}
        >
          <WeatherDiv
            color={weatherData && weatherData.cod === 200 ? weatherData.weather[0].main : ''}
            weather={weatherData && weatherData.cod === 200 ? weatherData.weather[0].main : ''}
          />
        </TitleContainer>
        <TitleContainer
          color={weatherData && weatherData.cod === 200 ? weatherData.weather[0].main : ''}
          flexType={'column'}
          title={'Wind Speed'}
        >
          <WindSpeedDiv
            color={weatherData && weatherData.cod === 200 ? weatherData.weather[0].main : ''}
            windSpeed={weatherData && weatherData.cod === 200 ? weatherData.wind.speed + ' Meter/Second' : ''}
          />
        </TitleContainer>
      </div>
    </PageWrapper>
  )
}

export default App
