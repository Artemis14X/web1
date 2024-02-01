import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import Template from './Template';
import Shop from './page/Shop';
import About from './page/About';
import Contact from './page/Contact';
import Cart from './page/Cart';
import Blog from './page/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
  },
  {
    path: "/Shop",
    element: <Shop />
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/Contact",
    element: <Contact />
  },
  {
    path: "/Cart",
    element: <Cart />
  },
  {
    path: "/Blog",
    element: <Blog />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />

);


reportWebVitals();
