import { dynamicTextColor } from '../../data/data'

export const LocationDiv = ({ location, color }) => {
  return <div style={{ color: `${dynamicTextColor(color)}` }}>{location}</div>
}
