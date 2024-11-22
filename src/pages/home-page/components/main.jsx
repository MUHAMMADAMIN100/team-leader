import { Button } from "./components";

export default function Main(){
    return <>
      <div className="flex forward_box">
            <div className="forward_text flex column">
                <div className="forward_text_box">
                <h1>Digitally forward creative</h1>

                <p className="flex g"><span>——— </span><span className="color"> When it comes to interactive marketing, we've got you covered. Be where the world is going</span></p>
                <div className="custom_elem">
                    <input className="custom_input" placeholder="Enter your email" type="text" /><Button title={"Try for free"}/>
                </div>
                </div>
            </div>
            <div className="flex box_img forward_img">
                <img  className="box_img_img" src="/src/pages/home-page/img/customer-light.png" alt="" />
                <div className="flex column"> 
                    <img className="img" src="/src/pages/home-page/img/sales-light.png" alt="" />
                    <img className="img" src="/src/pages/home-page/img/static-light.png" alt="" />
                </div>
            </div>
         </div>
    </>
}