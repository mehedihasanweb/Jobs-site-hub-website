import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Statistics from './components/Statistics';
import Jobs from './components/Jobs';
import Blogs from './components/Blogs';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home />,
        loader: () => fetch("data.json")
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: 'jobs',
        element: <Jobs />
      },
      {
        path: 'blogs',
        element: <Blogs/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
