import './buttons.css'
import { ReactComponent as Loading } from 'assets/svg/btn-loading.svg'

export const Buttons = () => {
  //isLoading = is-loading to activate loading button
  //label === button text content
  //isDisabled = disabled to disabled button
  //btnClass = primary, secondary, subtle or text to select kind of buttons
  //type to select button type
  return (
    <div className="btn-container">
      <div className="primary ">
        {/* Primary button */}
        <Button
          btnClass={'button-primary'}
          isLoading={''}
          label={'Primary'}
          isDisabled={''}
          btnType={'submit'}
        />
      </div>
      <div className="secondary">
        {/* Secondary button */}
        <Button
          btnClass={'button-secondary '}
          isLoading={''}
          label={'secondary'}
          isDisabled={''}
          btnType={'reset'}
        />
      </div>
      <div className="subtle">
        {/* subtle button */}
        <Button
          btnClass={'button-subtle'}
          isLoading={''}
          label={'Subtle'}
          isDisabled={''}
          btnType={'button'}
        />
      </div>
      <div className="">
        {/* text button */}
        <Button
          btnClass={'button-text'}
          isLoading={''}
          label={'Text'}
          isDisabled={''}
        />
      </div>
    </div>
  )
}

//Import Button component to use button
const Button = ({ btnClass, isLoading, label, isDisabled, btnType }) => {
  return (
    <div className={isLoading}>
      <button
        disabled={isDisabled}
        className={`button ${btnClass}`}
        type={btnType}
      >
        <span className="text">{label}</span>
        <span className="active-btn"></span>
        <span className="loading-text">loading...</span>
        <Loading className="loading-img" />
      </button>
    </div>
  )
}

export default Button
