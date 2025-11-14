import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ContextAPI from './Components/ContextAPI'


const App = () => {
  return (
    <HashRouter>
      <ContextAPI>
        <Routes>

          <Route path='/' element={<Home />} />

        </Routes>
      </ContextAPI>
    </HashRouter>
  )
}

export default App