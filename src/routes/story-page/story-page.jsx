import "./story-page.css";
import { Link } from "react-router-dom";

export default function StoryPage() {
  return (
    <div className="story page">
      <h1>Stories of components</h1>
      <Link to={`/`}>Back to home</Link>
      <Link to={`/stories/component`}>A-component</Link>
    </div>
  );
}
