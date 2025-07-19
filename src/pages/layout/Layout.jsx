import React from 'react'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header/>
        <main style={{minHeight: "70vh"}}>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout