import { Check } from "./components";

export default function Passion(){
    return <>
    <div className="passion_box flex justify-content-c">
        <div className="passion_box_img flex justify-content-c ">
           <img src="src/pages/home-page/img/bar-chart.png" alt="" />
        </div>
        <div className="passion_box_text flex column ">
           <h1>Passion to increase company revenue up to 85%</h1>
           <span>Automate your sales, marketing and service in one platform. Avoid date leaks and enable consistent messaging</span>
          <Check text={"Close more deals with single - page contact managment"}/>
          <Check text={"Enjoy one-click calling, call scripts and voicemail automation"}/>
          <Check text={"Take stages and milestones of your deals to keep the sales process an track"}/>
        </div>
    </div>
    </>
}