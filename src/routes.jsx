import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Home, Pricing } from "./routes/routes";
import Blog from "./pages/blog-page/blog";
import Contact from "./pages/contact-page/contact";
import Detail from "./pages/detail-page/detail";
import Layout from "./layout/layout";
import { Suspense } from "react";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                index:true,
                element:<Suspense><Home/></Suspense>
            },
            {
                path:"/about",
                element:<Suspense><About/></Suspense>
            },
            {
                path:"/blog",
                element:<Suspense><Blog /></Suspense>
            },
            {
                path:"/contact",
                element:<Suspense><Contact /></Suspense>
            },
            {
                path:"/detail",
                element:<Suspense><Detail /></Suspense>
            },
            {
                path:"/pricing",
                element:<Suspense><Pricing /></Suspense>
            },
            
        ]
    }
])


export function Browser() 
{
    return <RouterProvider router={router} />    
}