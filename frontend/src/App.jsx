import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to="/login">Login</Link> | {" "}
        <Link to="/home">Home</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
