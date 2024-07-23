// src/App.js
import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Root from './components/Root';
import About from './components/About';
import Error from './components/Error';
import Portfolio, {portfolioLoaders} from './components/Portfolio';
import './App.css';
import ProjectDetail, {projectDetailLoader} from './components/ProjectDetail';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {index: true, element: <Home />},
      {path: 'about', element: <About />},
      {
        path: 'portfolio',
        children: [
          {
            index: true,
            element: <Portfolio />,
            loader: portfolioLoaders,
          },
          {
            path: ':id',
            element: <ProjectDetail />,
            id: 'project-details',
            loader: projectDetailLoader,
          },
        ],
      },
      {path: 'contact-us', element: <About />},
    ],
  },
]);
function App () {
  return <RouterProvider router={router} />;
}

export default App;
