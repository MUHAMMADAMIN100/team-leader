import color1 from "./images/Ellipse 124.png"
import color2 from "./images/Ellipse 125.png"
import img3 from './images/Toggle.png'
import img4 from './images/Best Offers.png'
import icon1 from './images/Icon (4).png'
import check from './images/Icon (7).png'
import checkD from './images/Icon (8).png'
import('./pricing.css')
export default function Price() {
    return <div className="container">
        <div className="div-bg">
            <img className="bgs" src={color2} alt="" />
            <img className="bgs" src={color1} alt="" />
            <div className="absolute-div">
                <b>Pricing plans 🤑</b>
                <h1>Choose a plan for a more <br /> advanced business</h1>
                <img src={img3} alt="" />
            </div>
        </div>
        <div className="cards">
            <div className="card-box">
                <img src={icon1} alt="" />
                <b className="b-name">Starter</b>
                <p className="p-lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className="p-span"><span>$100</span>/mo</p>
                <div className="text-card">
                    <b>What’s included:</b>
                    <div><img src={check} alt="" />Unlimited Upload</div>
                    <div><img src={check} alt="" />Advanced Statistic</div>
                    <div><img src={check} alt="" />Profile Badge</div>
                    <div><img src={check} alt="" />Access to the community</div>


                    <div className="dark-p"><img src={checkD} alt="" />History of all Liked Photos</div>
                    <div className="dark-p"><img src={checkD} alt="" />Directory Listing</div>
                    <div className="dark-p"><img src={checkD} alt="" />Customize Your Profile</div>
                    <div className="dark-p"><img src={checkD} alt="" />Display Your Workshops</div>
                    <button>Chose Plan</button>
                </div>
            </div>



            <div className="card-boxblack">
                <div><img src={icon1} alt="" /> <img src={img4} alt="" /></div>
                <b className="b-name">Starter</b>
                <p className="p-lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className="p-span"><span>$100</span>/mo</p>
                <div className="text-card">
                    <b>What’s included:</b>
                    <div><img src={check} alt="" />Unlimited Upload</div>
                    <div><img src={check} alt="" />Advanced Statistic</div>
                    <div><img src={check} alt="" />Profile Badge</div>
                    <div><img src={check} alt="" />Access to the community</div>


                    <div className="dark-p"><img src={checkD} alt="" />History of all Liked Photos</div>
                    <div className="dark-p"><img src={checkD} alt="" />Directory Listing</div>
                    <div className="dark-p"><img src={checkD} alt="" />Customize Your Profile</div>
                    <div className="dark-p"><img src={checkD} alt="" />Display Your Workshops</div>
                    <button>Chose Plan</button>
                </div>
            </div>



            <div className="card-box">
                <img src={icon1} alt="" />
                <b className="b-name">Starter</b>
                <p className="p-lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className="p-span"><span>$100</span>/mo</p>
                <div className="text-card">
                    <b>What’s included:</b>
                    <div><img src={check} alt="" />Unlimited Upload</div>
                    <div><img src={check} alt="" />Advanced Statistic</div>
                    <div><img src={check} alt="" />Profile Badge</div>
                    <div><img src={check} alt="" />Access to the community</div>


                    <div className="dark-p"><img src={checkD} alt="" />History of all Liked Photos</div>
                    <div className="dark-p"><img src={checkD} alt="" />Directory Listing</div>
                    <div className="dark-p"><img src={checkD} alt="" />Customize Your Profile</div>
                    <div className="dark-p"><img src={checkD} alt="" />Display Your Workshops</div>
                    <button>Chose Plan</button>
                </div>
            </div>
        </div>



        <div className="text2-div">
            <div className="header-text">
                <h1>Frequently asked questions</h1>
                <p>Everything you need to know about the product and billing.</p>
            </div>
            <div className="h1s-div">
                <div className="hdiv">
                    <div><h3>Is there a free trial available? <span>-</span></h3></div>
                    <p>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                </div>
                <div><h3>How Can I Add More Emails To My Account? <span>+</span></h3></div>
                <div><h3>Can I Change Plans Or Cancel My Subscription At Any Time <span>+</span></h3></div>
                <div><h3> How Secure Is My Date With Sans CRM<span>+</span></h3></div>
                <div><h3> What Is The Uptime Guarantee<span>+</span></h3></div>
            </div>
        </div>
    </div>
}