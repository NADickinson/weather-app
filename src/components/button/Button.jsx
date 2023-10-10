import './button.css'

export const Button = ({ onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      {'button lol'}
    </div>
  )
}
