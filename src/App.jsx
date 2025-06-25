import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './2506/HomePage'
import AboutUs from './2506/AboutUs'
import NotFound from './2506/NotFound'

// CSR => Client Side Rendering
// SSR => Server Side Rendering

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<HomePage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App