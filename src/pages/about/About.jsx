import React from 'react'
import Hero from '../../components/hero/Hero'
import { Outlet } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const About = () => {
  const {data,error,loading} = useFetch("/users")
  return (
    <div id='about'>
      <Hero text={"About page"}/>
   
    </div>
  )
}

export default About