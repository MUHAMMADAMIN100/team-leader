import { RatingCard, TrendingCard } from "./components";

export default function Trending(){
    return <>
    <div className="trending_text">
        <h1>Trending news from Coca</h1>
        <span>we have some new Service to pamper you</span>
    </div>
    <div>
    <div style={{gap:"20px"}} className="flex align_center trending_box">
        <TrendingCard text={"What makes an authentic employee profile, and why does it matter ?"} img={"src/pages/home-page/img/lap.png"} date={"Published in Insight Jan 30, 2021"}/>
        <TrendingCard text={"How to build a Kaylen relationship with a good company"} img={"src/pages/home-page/img/lap2.png"} date={"Published in Insight Jan 30, 2021"}/>
    </div>
    <div></div>
    
    </div>
    <div style={{padding:"2vw"}} className="flex text_business align_center justify-content-s">
        <div>
            <h1 style={{fontSize:"2.5vw",width:"80%"}}>What our customer are saying</h1>
        </div>
        <div>
            <p className="business_text" style={{fontSize:"1.5vw",color:"#878787",width:"50%"}}>We are trusted numerous companies from different business to meet their needs</p>
        </div>
    </div>
    <RatingCard/>
    </>
}