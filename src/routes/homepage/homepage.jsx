import './homepage.css'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className="homepage">
      <h1>This is homepage test</h1>
      <ul>
        <li>
          <Link to={`story`}>To story page</Link>
        </li>
        <li>
          <Link to={`test`}>To test page</Link>
        </li>
      </ul>
    </div>
  )
}
