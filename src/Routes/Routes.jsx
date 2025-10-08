import React, { Children, Component } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AppsData from '../pages/AppsData/AppsData';


 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader:() => fetch('./appsData.json'),
        path: "/",
        Component:Home
      },
      {
        path:'appsData',
        loader:() => fetch('./appsData.json'),
        Component:AppsData
      }
      
    ]
  },
]);