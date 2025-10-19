import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Root from "../Layouts/Root";
import Error from "../Pages/Error";
import AppDetails from "../Components/AppDetails/AppDetails";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
          index: true,
          Component: Home,
          loader: ()=> fetch('/homedata.json')
        },
        {
            path:'/apps',
            Component:Apps,
            loader: () => fetch('/appsdata.json') 
        },
        {
           path: "/apps/:id",
           Component: AppDetails,
           loader: () => fetch('/appsdata.json') 
        },
        {
          path:'/installation',
          Component:Installation,
           loader: () => fetch('/appsdata.json').then(res => res.json())
        },
        {
          path: "*", 
          Component: Error,
        }
    ]
  },
]);

export default router