import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  json,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Statistics from './components/Statistics';
import Jobs from './components/Jobs';
import Blogs from './components/Blogs';
import Home from './components/Home';
import JobDetail from './components/JobDetail';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/',
        element: <Home />,
        loader: () => fetch("data.json")
      },
      {
        path: '/:jobId',
        element: <JobDetail />,
        loader: async({params})=> {
          const job = await fetch(`/data.json`)
          const details = await job.json()
          return details.find(detail => detail.id == params.jobId)
        }
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: 'jobs',
        element: <Jobs />,
        loader: () => fetch("data.json")
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
