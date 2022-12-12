import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header/header'
// import Footer from "./components/footer/footer";
import HeaderSearchBar from 'components/headerWithSearchBar/HeaderSearchBar'

const App = () => {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main className="main">
        <Outlet />
        <HeaderSearchBar />
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  )
}

export default App
