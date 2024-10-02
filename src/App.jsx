import { useState } from 'react'
import './App.css'
import HomePage from './pages/home/HomePage';
import AboutUs from './pages/aboutUs/AboutUsPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <HomePage></HomePage> */}
      <AboutUs/>
    </div>
  )
}

export default App
