import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Timer from './components/Timer'
import Togle from './components/Togle'

function App() {
  return (
    <>
      <Counter/>
      <Timer/>
      <Togle/>
    </>
  )
}

export default App
