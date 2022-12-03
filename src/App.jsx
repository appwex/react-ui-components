import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
