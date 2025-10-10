import { createBrowserRouter } from "react-router-dom"; 
import React from "react";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AppsData from "../pages/AppsData/AppsData";
import AppDetails from "../pages/AppDetails/AppDetails";
import AllApps from "../pages/AllApps/AllApps";
import MyInstallation from "../pages/MyInstallation/MyInstallation";
import SeachError from "../components/SearchError/SeachError";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/appsData.json"),
        element: <Home />
      },
      {
        path: "appsData",
        loader: () => fetch("/appsData.json"),
        element: <AppsData />
      },
      {
        path: "app/:id",
        loader: async ({ params }) => {
          const res = await fetch("/appsData.json");
          const data = await res.json();
          return data.find((app) => app.id === parseInt(params.id));
        },
        element: <AppDetails />
      },
      {
        path: "apps",
        loader: () => fetch("/appsData.json"),
        element: <AllApps />
      },
      {
        path: "installation",
        loader: () => fetch("/appsData.json"),
        element: <MyInstallation />
      },
      {
        path:"search-error",
        element:<SeachError></SeachError>
      }
      
    ]
  }
]);
