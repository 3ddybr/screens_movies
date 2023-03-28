import { Banner } from '../../Components/Banner'
import { Carousel } from '../../Components/Carousel'

export default function Home() {
  return (
    <div>
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
