import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'


const App = () => {
  return (
    <HashRouter>
      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>
    </HashRouter>
  )
}

export default App