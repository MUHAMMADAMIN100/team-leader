import Cards from "./components";


export default function Client(){
    return <>
    <div className="coca_cola">
        <div className="coca_cola_box">
        <h1>Coca help our client solve complex customer problems with date that does more.</h1>
        <span>Our platform offers the modern enterprise full control of how date can be access and used with industry leading software solutions for identity, activation, and date collaboration</span>
        </div>
        <div className="coca_cola_cards"> 
           <Cards text={"Build your date fundamental"} desc={"Build access to date, develop valuable business insights and drive revenue while maintaining full control over access and use of date at all times."} img={"src/pages/home-page/img/Icon.png"}/>
            <Cards text={"Measure more effective"} desc={"Effectively measure people-based campaigns with the freedom to choose from best-of breed partners to optimize and drive media innovation."} img={"src/pages/home-page/img/Icon(1).png"}/>
            <Cards text={"Activate your date"} desc={"Accurately address your specific audiences at scale across any channel, platform, publisher or network and safely translate date between identity space to improve results."} img={"src/pages/home-page/img/Icon(2).png"}/>
            <Cards text={"Strengthen consumer privacy"} desc={"Protect your customer date with leading privacy-preserving technologies and advanced techniques to minimize date movement while still enabling insight generation."} img={"src/pages/home-page/img/Icon(3).png"}/>
        </div>
        
    </div>
    </> 
}
