import './story-page.css'
import { Link } from 'react-router-dom'

const StoryPage = () => {
  return (
    <div className="story page">
      <h1>Stories of components</h1>
      <Link to={`/`}>Back to home</Link>
      <Link to={`/stories/component`}>A-component</Link>
      <Link to={`/stories/button`}>Example Button</Link>
      <Link to={`/stories/quicktransfer`}>Quick transfer</Link>
      <Link to={`/stories/notification`}>Notification Bar</Link>
      <Link to={`/stories/payment`}> Payment </Link>
      <Link to={`/stories/cardpayment`}> Card Payment </Link>
      <Link to={`/stories/codeWriter`}> Code Writer </Link>
      <Link to={`/stories/cookie`}> Cookie </Link>
      <Link to={`/stories/anotherProfile`}> AnotherProfile </Link>
      <Link to={`/stories/sidebarmenu`}>Sidebar Menu</Link>
      <Link to={`/stories/chart`}>Chart</Link>
      <Link to={`/stories/recent-activity`}> Activities </Link>
      <Link to={`/stories/profile`}>Profile</Link>
      <Link to={`/stories/add-information`}>Add Imformation</Link>
      <Link to={`/stories/coinvalue`}>Coin Value</Link>
    </div>
  )
}

export default StoryPage
