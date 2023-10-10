import { apiKey } from './utils'

export const getWeather = async ({ lat, long }) => {
  const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`)
  const obj = await result.json()
  return obj
}
