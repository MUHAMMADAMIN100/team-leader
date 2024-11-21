import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Home, Pricing } from "./routes/routes";
import Blog from "./pages/blog-page/blog";
import Contact from "./pages/contact-page/contact";
import Detail from "./pages/detail-page/detail";
import Layout from "./layout/layout";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/blog",
                element:<Blog />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/detail",
                element:<Detail />
            },
            {
                path:"/pricing",
                element:<Pricing />
            },
            
        ]
    }
])


export function Browser() 
{
    return <RouterProvider router={router} />    
}