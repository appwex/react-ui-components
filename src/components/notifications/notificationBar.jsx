import './notificationBar.css';

import { ReactComponent as SendIcon } from '../../assets/svg/send.svg';
import { ReactComponent as ReceiveIcon } from '../../assets/svg/receive.svg';
import { ReactComponent as NotificationErrorIcon } from '../../assets/svg/notification-error.svg';

const NotificationBar = ({
  idx,
  type,
  to = '',
  from = '',
  amount = 0,
  unit = '',
  isActive = false,
  handleIsActiveBar,
}) => {
  return (
    <div
      className={`notification-bar-container ${isActive && 'active'}`}
      value={idx}
      onClick={() => handleIsActiveBar(idx)}
    >
      {type === 'send' && (
        <>
          <span className={`notification-icon ${isActive && 'active'}`}>
            <SendIcon />
          </span>
          <div className="notification-text">
            <p className={`text-title ${isActive && 'active'}`}>
              Your money has been delivered
            </p>
            <p className="text-subtitle">
              Awesome, {to} has received your money
            </p>
          </div>
        </>
      )}

      {type === 'error' && (
        <>
          <span className={`notification-icon ${isActive && 'active'}`}>
            <NotificationErrorIcon />
          </span>
          <div className="notification-text">
            <p className={`text-title ${isActive && 'active'}`}>
              Etehreum wallet watch alert!
            </p>
            <p className="text-subtitle">
              Your Ethereum wallet has been unusual...
            </p>
          </div>
        </>
      )}

      {type === 'receive' && (
        <>
          <span className={`notification-icon ${isActive && 'active'}`}>
            <ReceiveIcon />
          </span>
          <div className="notification-text">
            <p className={`text-title ${isActive && 'active'}`}>
              You just received
            </p>
            <p className="text-subtitle">
              {from} just sent you{' '}
              <strong>
                {amount} {unit}.{' '}
              </strong>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationBar;
