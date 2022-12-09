import NotificationBar from './notificationBar'
import './notifications.css'
import { ReactComponent as SettingIcon } from 'assets/svg/setting.svg'
import { ReactComponent as CongratulationIcon } from 'assets/svg/congratulation.svg'
import { useState } from 'react'
// expected input

const Notifications = () => {
  const notificationData = [
    {
      id: 0,
      type: 'send',
      to: 'Karios',
    },
    {
      id: 1,
      type: 'send',
      to: 'Joe',
    },
    {
      id: 2,
      type: 'error',
    },
    {
      id: 3,
      type: 'receive',
      from: 'Paradigm',
      amount: 0.020291,
      unit: 'BTC',
    },
  ]

  const [isActiveBar, setIsActiveBar] = useState(0)

  const handleIsActiveBar = input => {
    setIsActiveBar(input)
  }

  return (
    <div className="notification-container">
      <div className="notification-title">
        <div className="notification-title-text">
          <p>Notifications</p>
          <span>1</span>
        </div>
        <div className="notification-setting-icon">
          <SettingIcon />
        </div>
      </div>
      <div className="notification-list">
        <ul>
          {notificationData.map((item, idx) => {
            return (
              <li key={item.id}>
                <NotificationBar
                  idx={idx}
                  type={item.type}
                  to={item.to}
                  from={item.from}
                  amount={item.amount}
                  unit={item.unit}
                  isActive={idx === isActiveBar}
                  handleIsActiveBar={handleIsActiveBar}
                />
              </li>
            )
          })}
        </ul>
      </div>
      <div className="notification-subscription-container">
        <div className="notification-subscription">
          <span>
            <CongratulationIcon />
          </span>
          <div className="notification-sub-text">
            <span>Congratulation!!</span>
            <p>You can activate paid subscription</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications
