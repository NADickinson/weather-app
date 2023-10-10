import { mappedCountries } from '../../data/data'

export const CustomSelect = ({ onChange }) => {
  return <select onChange={onChange}>{mappedCountries}</select>
}
