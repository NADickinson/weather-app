import './customInput.css'

export const CustomInput = ({ type, onChange, onKeyDown }) => {
  return <input className="customInput" type={type} onChange={onChange} onKeyDown={onKeyDown}></input>
}
