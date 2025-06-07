import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import Error from '../Pages/ErrorPages/Error';
import Home from '../Pages/Home';


export const router = createBrowserRouter([
  {
    path: '/',
    Component:Root,
    errorElement:<Error></Error>,
    children: [
        {
        index: true,
        path:'/',
        Component:Home,
    }
    ]
  },
])