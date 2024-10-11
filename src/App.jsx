import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css';
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Country } from './pages/Country'
import { Contact } from './pages/Contact'
// import { Children } from 'react'
// import {AppLayout} from './components/Layout/AppLayout';
import {AppLayout} from './component/Layout/AppLayout'
import {ErrorPage} from './pages/ErrorPage'
import {CountryDetails} from './component/Layout/CountryDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'country',
        element: <Country />
      },
      {
        path: 'country/:id',
        element: <CountryDetails />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])



function App() {
  return (
    <div data-bs-theme="dark">
      <RouterProvider  router={router}/>
    </div>
  )

  
  
}

export default App
