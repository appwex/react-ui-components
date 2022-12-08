import './cookie.css'
import { ReactComponent as ChristmasCookieIcon } from '../../assets/svg/christmas-cookie.svg'

const Cookie = () => {
  return (
    <section className="cookie">
      <span className="cookieIcon">
        <ChristmasCookieIcon />
      </span>
      <p className="cookieText">
        Our site uses cookies to ensure the best browsing experience possible.
        See our Privacy Policy for more details.
      </p>
      <div className="cookieButtons">
        <button className="cookieAccept cookieBtn">Accept</button>
        <button className="cookieDecline cookieBtn">Decline</button>
      </div>
    </section>
  )
}

export default Cookie
