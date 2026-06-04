import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

import Contact from "../pages/Contact";


import Careers from "../pages/Careers";
import Notfound from "../pages/Notfound";


export const router = createBrowserRouter([
{
    path: "*",
    element: <Notfound/>
},{
    path: "/",
    element: <Home/>
},


{
    path: "/contact",
    element: <Contact/>
},
{
    path: "/careers",
    element: <Careers/>
},




])


