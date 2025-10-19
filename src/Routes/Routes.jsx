import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Root from "../Layouts/Root";
import Error from "../Pages/Error";
import AppDetails from "../Components/AppDetails/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
          index: true,
          Component: Home,
          loader: ()=> fetch('./homedata.json')
        },
        {
            path:'/apps',
            Component:Apps,
            loader: () => fetch('./appsdata.json') 
        },
        {
           path: "/apps/:id",
           Component: AppDetails,
           loader: () => fetch('./appsdata.json') 
        },
        {
          path: "*", 
          Component: Error,
        }
    ]
  },
]);

export default router