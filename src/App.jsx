import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Help from './pages/help/Help'
import NotFound from './pages/not-found/NotFound'
import Login from './pages/login/Login'
import Layout from './pages/layout/Layout'
import DetailProduct from './pages/detail-product/DetailProduct'

const App = () => {
  const b = 6
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index={true} element={<Home/>}/>
          <Route path='/haqida' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/product/:id' element={<DetailProduct/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>

      </Routes>
   
    </BrowserRouter>
  )
}

export default App
