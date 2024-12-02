import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'; 
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Home></Home>
    <About/>
    <Footer></Footer>
    </BrowserRouter>
     </>
  )
}

export default App
