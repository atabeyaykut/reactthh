import { Route, Routes } from 'react-router-dom'
import HomePage2 from './0407/HomePage2'
import './App.css'
import React from 'react'
import UserDetail from './0407/UserDetail'
import FormPage from './0407/FormPage'

// CSR => Client Side Rendering
// SSR => Server Side Rendering

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<FormPage />} />
      </Routes>

    </>
  )
}

export default App