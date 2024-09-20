import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import PracGrid from './components/PracGrid'

function App() {

  return (
    <Routes>
      <Route path="" element={<PracGrid />}/>
    </Routes>
  )
}

export default App
