import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import { api } from '../../api'

const Home = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    api
      .get("/recipes")
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div id='home'>
      <Hero text={"Home"}/>
      {/* <Products/> */}
    </div>
  )
}

export default Home