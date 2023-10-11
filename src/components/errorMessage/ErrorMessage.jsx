import { dynamicTextColor } from '../../data/data'

export const ErrorMessage = ({ opacity, color }) => {
  return (
    <div style={{ opacity: opacity, color: `${dynamicTextColor(color)}`, transition: 'opacity 3000ms' }}>
      {'Invalid postcode'}
    </div>
  )
}
