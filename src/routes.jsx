import { createBrowserRouter } from "react-router-dom";
import { About, Home } from "./routes/routes";

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
            }
        ]
    }
])