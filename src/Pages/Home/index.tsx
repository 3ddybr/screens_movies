import { Banner } from '../../Components/Banner'
import { Carousel } from '../../Components/Carousel'

export default function Home() {
  return (
    <div>
      <Banner />
      <Carousel descShared="movie/top_rated?" descTitle="Top Rank" />
      <Carousel descShared="movie/popular?" descTitle="Popular" />
      <Carousel descShared="movie/upcoming?" descTitle="Esta Por Vir" />
      {/* <Carousel descShared="now_playing?" descTitle="Assistindo Agora" /> */}
      {/* <Carousel descShared="person/popular?page=1" descTitle="teste" /> */}
      {/* <CardCarousel /> */}
    </div>
  )
}
