import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Root from './Root.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubApiCall } from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <Root/>,    
    children:   [
      {
        path: '',
        element: <Home/> 
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'github',
        loader : githubApiCall,
        element: <Github/>
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
