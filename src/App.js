// src/App.js
import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Root from './components/Root';
import About from './components/About';
import Error from './components/Error';
import Portfolio from './components/Portfolio';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {path: '/', element: <Home />},
      {path: '/about', element: <About />},
      {path: '/portfolio', element: <Portfolio />},
      {path: '/contact-us', element: <About />},
    ],
  },
]);
function App () {
  return <RouterProvider router={router} />;
}

export default App;
