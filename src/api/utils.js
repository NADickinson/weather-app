export const apiKey = '226ab45376822db7751d526cd00c104f'

export const kelvinConverter = kelvin => {
  const result = kelvin - 273.15
  return result.toFixed(2)
}
