import './pageWrapper.css'

const dynamicBackground = weatherStatus => {
  switch (weatherStatus) {
    case 'Clouds':
      return ' url("https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_1280.jpg")'
    case 'Rain':
      return 'url("https://cdn.pixabay.com/photo/2019/01/25/11/41/rain-3954273_1280.jpg")'
    case 'Thunderstorm':
      return 'url("https://cdn.pixabay.com/photo/2015/11/22/15/16/lightning-1056419_1280.jpg")'
    case 'Drizzle':
      return 'url("https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg")'
    case 'Clear':
      return 'url("https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_1280.jpg")'
    case 'Snow':
      return 'url("https://cdn.pixabay.com/photo/2019/12/30/20/34/road-4730553_1280.jpg")'
    case 'Atmosphere':
      return 'url("")'
    default:
      return ''
  }
}

export const PageWrapper = ({ children, weatherStatus }) => {
  return (
    <div
      className="pageWrapper"
      style={{
        backgroundSize: 'cover',
        backgroundImage: weatherStatus ? `${dynamicBackground(weatherStatus)}` : '#76738C',
      }}
    >
      {children}
    </div>
  )
}
