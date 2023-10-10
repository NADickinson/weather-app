import { kelvinConverter } from '../../api/utils'
import './tempDiv.css'

export const TempDiv = ({ temp }) => {
  if (temp) return <div className="temp">{kelvinConverter(temp)}</div>
}
