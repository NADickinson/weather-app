import './customInput.css'

export const CustomInput = ({ type, onChange }) => {
  return <input className="customInput" type={type} onChange={onChange}></input>
}

//on change? value? dangerouslysetinnerhtml, passing it up? BABEL DEPENDENCIES!!!!
