import { createBrowserRouter } from "react-router-dom";
import { About, Home, Pricing } from "./routes/routes";
import Blog from "./pages/blog-page/blog";
import Contact from "./pages/contact-page/contact";
import Detail from "./pages/detail-page/detail";

const router=createBrowserRouter([
    {
        path:"/",
        element:"",
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