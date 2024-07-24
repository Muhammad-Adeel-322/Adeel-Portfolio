import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../pages/Homesec/Home"
import About from "../pages/About/About"
import Projects from "../pages/OurProject/Projects"
import Resume from "../pages/Resume"

export default function Routs() {
  return (
    <div>
         <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/Project' element={<Projects />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
