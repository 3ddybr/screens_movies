import { Banner } from '../../Components/Banner'
import { CardCarousel } from '../../Components/CardCarousel'
import { Carousel } from '../../Components/Carousel'
import { Navbar } from '../../Components/NavBar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Carousel />
      {/* <CardCarousel /> */}
    </div>
  )
}
