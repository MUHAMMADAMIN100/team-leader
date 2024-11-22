import Client from "./components/client";
import CompaniesLogo from "./components/companies";
import { Button } from "./components/components";
import Main from "./components/main";
import Business from "./components/our-bussines";
import Passion from "./components/passion";
import Trending from "./components/trending";
import "./home.css"
export default  function Home(){
    return <>
       <Main/>
       <Client/>
       <Passion/>
       <Business/>
       <CompaniesLogo/>
       <Trending/>
       
    </>
}