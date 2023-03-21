import { Banner } from '../../Components/Banner'
import { CardCarousel } from '../../Components/CardCarousel'
import { Carousel } from '../../Components/Carousel'
import { Navbar } from '../../Components/NavBar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Carousel descShared="top_rated?" descTitle="Top Rank" />
      <Carousel descShared="popular?" descTitle="Popular" />
      <Carousel descShared="upcoming?" descTitle="Esta Por Vir" />
      {/* <Carousel descShared="discover/movie?" descTitle="Mais Recentes" /> */}
      <Carousel descShared="now_playing?" descTitle="Assistindo Agora" />
      {/* <CardCarousel /> */}
    </div>
  )
}
