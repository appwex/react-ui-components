import './profile.css'
import avatar from '../../assets/images/avatar.png'

const Profile = () => {
  return (
    <>
      <div className="profile-wrapper">
        <img src={avatar} alt="avatar" className="avatar" />
        <div className="profile-info">
          <h4 className="profile-name">
            Ahmad Reza Parvizi
            <span className="subsription">Pro</span>
          </h4>
          <span className="date">Apr 24, 2022</span>
        </div>
      </div>
    </>
  )
}
export default Profile
