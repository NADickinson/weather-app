import { apiKey } from './utils'

export const getlatAndLong = async ({ zipCode, countryCode }) => {
  const result = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${apiKey}`)
  const { lat, lon } = await result.json()
  return [lat, lon]
}
