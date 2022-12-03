import "./test-page.css";
import { Link } from "react-router-dom";

export default function TestPage() {
  return (
    <div className='story page'>
      <h1>This is Test page</h1>
      <Link to={`/`}>Back to home</Link>
    </div>
  );
}
