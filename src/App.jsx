import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ContextAPI from './Components/ContextAPI'
import MovieData from './Pages/MovieData'


const App = () => {
  return (
    <HashRouter>
      <ContextAPI>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<MovieData />} />

        </Routes>
      </ContextAPI>
    </HashRouter>
  )
}

export default App
