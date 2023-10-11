import { dynamicTextColor } from '../../data/data'
import './locationDiv.css'

export const LocationDiv = ({ location, color }) => {
  return (
    <div className="location" style={{ color: `${dynamicTextColor(color)}` }}>
      {location}
    </div>
  )
}
