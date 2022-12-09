import './payment.css'
import { ReactComponent as MasterCard } from '../../assets/svg/masterCard.svg'
import { useState } from 'react'
const CardPayment = () => {
  const [darkMode, setdarkMode] = useState(false)

  return (
    <>
      <div
        className={`cardPayment ${
          darkMode ? 'darkBg darkCardPayment' : 'whiteBg'
        } dFlex flexColumn gap`}
      >
        <div className="cardPaymentHeader">
          <h3>Pay amount</h3>
        </div>
        <div>
          <form className="dFlex flexColumn gap">
            <div className="dFlex flexColumn">
              <label className="w-100">card number</label>
              <div className="dFlex cardNumber">
                <input
                  className="w-100"
                  type="tel"
                  placeholder="8881 4749 9383 ****"
                  maxLength={20}
                ></input>
                <MasterCard className="icon" />
              </div>
            </div>
            <div className="dFlex justifyContentBetween">
              <div className="d-flex flexColumn w-50">
                <label>expiry</label>
                <input type="tel" placeholder="MM/YY" maxLength={5} />
              </div>
              <div className="dFlex flexColumn w-50">
                <label>cvv</label>
                <input type="tel" name="cardNum" maxLength={3} />
              </div>
            </div>
            <div className="dFlex action">
              <div className="dFlex flexColumn actionBtn cancel">
                <a href="#cancel">Cancel</a>
              </div>
              <button className="dFlex flexColumn actionBtn pay" type="submit">
                Make Payment
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={`darkMode ${darkMode ? 'whiteBg' : 'darkBg'}`}>
        <span
          className={`${darkMode ? 'slide' : ''}`}
          onClick={() => setdarkMode(!darkMode)}
        />
      </div>
    </>
  )
}

export default CardPayment
