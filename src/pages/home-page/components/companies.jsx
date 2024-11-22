import { CardCustom, Text } from "./components";


export default function CompaniesLogo() {
    return <>
        <div style={{}} className="flex justify-content-c companies_box">
            <div>
                <Text text={"890+"} desc={"some big companies that we work with, and trust us very much"}/>
            </div>
            <div className="logo_companies">
                <span><img src="src/pages/home-page/img/Airbnb-Logo.png" alt="" /></span>   
                <span><img src="src/pages/home-page/img/Amazon-Logo.png" alt="" /></span>   
                <span><img src="src/pages/home-page/img/Microsoft-Logo.png" alt="" /></span>   
                <span><img src="src/pages/home-page/img/OLA-Logo.png" alt="" /></span>   
                <span><img src="src/pages/home-page/img/OYO-Logo.png" alt="" /></span>   
                <span><img src="src/pages/home-page/img/Walmart-Logo.png" alt="" /></span>   
                <span><img src="src/pages/home-page/img/FedEx-Logo.png" alt="" /></span>   
                <span><img src="src/pages/home-page/img/Google-Logo.png" alt="" /></span>   
            </div>
        </div>
        <div style={{width:"40vw",padding:"2vw"}}>
            <h1 className="text_text">Advertise, analyze, and optimize! We do it all for you</h1>
        <br />
        <span className="text_desc" style={{color:"#7E8492"}}>Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster</span>
        </div>
        <div className="advertise">
            <CardCustom img={"src/pages/home-page/img/Frame1.png"} title={"Lead happiness for customers"} desc={"Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster"}/>
            <CardCustom img={"src/pages/home-page/img/Frame2.png"} title={"Lead happiness for customers"} desc={"Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster"}/>
            <CardCustom img={"src/pages/home-page/img/Frame3.png"} title={"Lead happiness for customers"} desc={"Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster"}/>
            <CardCustom img={"src/pages/home-page/img/Frame4.png"} title={"Lead happiness for customers"} desc={"Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster"}/>
        </div>
    </>
}