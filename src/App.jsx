import './App.css'
import React from "react"
import Contact from './components/Contact'
import Content from './components/Content'
import Intro from './components/Intro'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='container'>
      <Intro />
      <Contact />
      <Content />
      <Footer />
    </div>
  )
}

