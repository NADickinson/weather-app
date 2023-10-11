import { dynamicTextColor } from '../../data/data'
import './windSpeedDiv.css'

export const WindSpeedDiv = ({ windSpeed, color }) => {
  return (
    <div style={{ color: `${dynamicTextColor(color)}` }} className="wind-speed">
      {windSpeed}
    </div>
  )
}
