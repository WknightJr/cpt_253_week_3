import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components
import { UseStateCounter } from './components/UseStateCounter'
import { UseReducerCounter } from './components/UseReducerCounter'

function App() {

  return (
    <>
      <h1>Counter Utilizing Use state</h1>
      <UseStateCounter />
      <h1>Counter Utilizing Use Reducer</h1>
      <UseReducerCounter />
    </>
  )
}

export default App
