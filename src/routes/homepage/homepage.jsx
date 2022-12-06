import './homepage.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>This is homepage test</h1>
      <ul>
        <li>
          <Link to={`stories`}>To stories page</Link>
        </li>
        <li>
          <Link to={`test`}>To test page</Link>
        </li>
      </ul>
    </div>
  )
}

export default Homepage
