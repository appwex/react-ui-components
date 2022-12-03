import './story-page.css'
import { Link } from 'react-router-dom'

export default function StoryPage() {
  return (
    <div className="story page">
      <h1>This is Story page</h1>
      <Link to={`/`}>Back to home</Link>
    </div>
  )
}
