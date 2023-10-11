import { kelvinConverter } from '../../api/utils'
import { dynamicTextColor } from '../../data/data'
import './tempDiv.css'

export const TempDiv = ({ temp, color }) => {
  if (temp)
    return (
      <div style={{ color: `${dynamicTextColor(color)}` }} className="temp">
        {kelvinConverter(temp)}
      </div>
    )
}
