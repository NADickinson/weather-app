import { dynamicTextColor } from '../../data/data'
import './weatherDiv.css'

export const WeatherDiv = ({ weather, color }) => {
  return (
    <div style={{ color: `${dynamicTextColor(color)}` }} className="weather">
      {weather}
    </div>
  )
}
