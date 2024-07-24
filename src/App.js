import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Root from './components/Root';
import About from './components/About';
import Error from './components/Error';
import Portfolio, {portfolioLoaders} from './components/Portfolio';
import ProjectDetail, {projectDetailLoader} from './components/ProjectDetail';
import PracticeZone from './components/PracticeZone';

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
      {path: 'practice-zone', element: <PracticeZone />},
    ],
  },
]);
function App () {
  return <RouterProvider router={router} />;
}

export default App;
