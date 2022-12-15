import './buttons.css'

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
          isDisabled={'disabled'}
          btnType={'submit'}
        />
      </div>
      <div className="secondary">
        {/* Secondary button */}
        <Button
          btnClass={'button-secondary '}
          isLoading={'is-loading'}
          label={'secondary'}
          isDisabled={'disabled'}
          btnType={'reset'}
        />
      </div>
      <div className="subtle">
        {/* subtle button */}
        <Button
          btnClass={'button-subtle'}
          isLoading={''}
          label={'Subtle'}
          isDisabled={'disabled'}
          btnType={'button'}
        />
      </div>
      <div className="">
        {/* text button */}
        <Button
          btnClass={'button-text'}
          isLoading={'is-loading'}
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
        <svg
          className="loading-img"
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0002 1.66671C8.35198 1.66671 6.74082 2.15545 5.37041 3.07113C4 3.9868 2.9319 5.28829 2.30117 6.81101C1.67044 8.33373 1.50541 10.0093 1.82695 11.6258C2.14849 13.2423 2.94217 14.7272 4.1076 15.8926C5.27304 17.058 6.7579 17.8517 8.37441 18.1733C9.99092 18.4948 11.6665 18.3298 13.1892 17.699C14.7119 17.0683 16.0134 16.0002 16.9291 14.6298C17.8448 13.2594 18.3335 11.6482 18.3335 10"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default Button
