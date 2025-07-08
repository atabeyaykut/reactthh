import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import NameForm from './0807/NameForm'
import ContactForm from './0807/ContactForm'
import LoginForm from './0807/LoginForm'
import SingleCheckbox from './0807/SingleCheckbox'
import MultipleCheckboxes from './0807/MultipleCheckboxes'
import HobbiesForm from './0807/HobbiesForm'

// CSR => Client Side Rendering
// SSR => Server Side Rendering

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HobbiesForm />} />
      </Routes>

    </>
  )
}

export default App