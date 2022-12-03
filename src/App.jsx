import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
