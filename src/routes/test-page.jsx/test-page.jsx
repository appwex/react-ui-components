import './test-page.css'
import { Link } from 'react-router-dom'

const TestPage = () => {
  return (
    <div className="story page">
      <h1>This is Test page</h1>
      <Link to={`/`}>Back to home</Link>
    </div>
  )
}

export default TestPage
