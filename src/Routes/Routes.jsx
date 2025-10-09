import React, { Children, Component } from 'react';
import { createBrowserRouter, } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AppsData from '../pages/AppsData/AppsData';
import AppDetails from '../pages/AppDetails/AppDetails';
import AllApps from '../pages/AllApps/AllApps';
import MyInstallation from '../pages/MyInstallation/MyInstallation';



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
      },
      {
        path: 'app/:id',
  loader: async ({ params }) => {
    const res = await fetch('./appsData.json');
    const data = await res.json();
    // শুধুমাত্র clicked app return করা
    return data.find(app => app.id === parseInt(params.id));
  },
  Component: AppDetails

      },

      {
        path:'apps',
        loader:() => fetch('./appsData.json'),
        element:<AllApps></AllApps>

      },
      {
        path:'installation',
        loader:() => fetch('./appsData.json'),
        element: <MyInstallation></MyInstallation>

      }
     
      
    ]
  },
]);