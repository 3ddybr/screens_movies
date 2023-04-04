/* eslint-disable prettier/prettier */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './App'

import Home from './Pages/Home'
import Movie from './Pages/Movie'
import Search from './Pages/Search'
import Atualizados from './Pages/Atualizados'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/movie:id',
//     element: <Movie />,
//   },
//   {
//     path: '/search',
//     element: <Search />,
//   },
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/movie/:id',
        element: <Movie />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/atualizados',
        element: <Atualizados />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
)
