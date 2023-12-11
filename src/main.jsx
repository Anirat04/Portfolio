import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
// import PageContainer from './Layout/Home/Pages/PageContainer.jsx';
import Home from './Layout/Home/Home.jsx';
import About from './Layout/Home/Pages/About/About.jsx';
import Contact from './Layout/Home/Pages/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <About></About>
          },
          {
            path: "/contact",
            element: <Contact></Contact>
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
