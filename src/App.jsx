import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Timer from './components/Timer'
import Togle from './components/Togle'
import LocalStorage from './components/LocalStorage'

function App() {
  return (
    <>
      <Counter/>
      <Timer/>
      <Togle/>
      <LocalStorage/>
    </>
  )
}

export default App
