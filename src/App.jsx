import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
function App() {
  
  return (
    <>
    <Router>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>

      <Footer/>
    </Router>
    </>
  )
}

export default App
