import { dynamicTextColor } from '../../data/data'
import './titleContainer.css'

export const TitleContainer = ({ children, title, flexType, color }) => {
  return (
    <div className="title" style={{ flexDirection: flexType, color: `${dynamicTextColor(color)}` }}>
      {title}
      {children}
    </div>
  )
}
