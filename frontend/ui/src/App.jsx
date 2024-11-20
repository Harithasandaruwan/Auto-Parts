import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
