import './title.css'

export const TitleContainer = ({ children, title, flexType }) => {
  return (
    <div className="title" style={{ flexDirection: flexType }}>
      {title}
      {children}
    </div>
  )
}
