import React from 'react'
import { Banner } from '../../Components/Banner'
import { Carousel } from '../../Components/Carousel'
import { Navbar } from '../../Components/NavBar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Carousel />
    </div>
  )
}
