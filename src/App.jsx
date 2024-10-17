import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
function App() {
  
  return (
    <>
    <Router>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      <Footer/>
    </Router>
    </>
  )
}

export default App
