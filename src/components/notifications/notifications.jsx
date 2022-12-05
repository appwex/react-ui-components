// expected input

const Notifications = () => {
  const notificationData = [
    {
      type: 'send',
      to: 'Karios',
    },
    {
      type: 'send',
      to: 'Joe',
    },
    {
      type: 'unusual',
    },
    {
      type: 'receive',
      from: 'Karios',
      amount: 1,
    },
  ];

  return (
    <div className="notification-container">
      <div className="notification-title">
        <span>Notifications</span>
        <p>Setting</p>
      </div>
      <div className="notification-list">
        <ul>
          <li>test</li>
        </ul>
      </div>
      <div className="notification-subscription">
        <p>icon</p>
        <div className="notification-sub-text">
          <span>Congratulation</span>
          <p>You can activate paid subscription</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
