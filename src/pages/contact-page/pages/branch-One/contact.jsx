import "./contact-page.css"

export default function Contact() {
    return <>
        <div className="oneListText">
            <h1>Countact our team to find out more</h1>
        </div>
        <div className="divMapCards">
            <div className="mapDiv">
                <img className="mapImage" src="/src/pages/contact-page/pages/branch-One/Map.png" alt="" />
                <img className="locationImage" src="/src/pages/contact-page/pages/branch-One/Pin.png" alt="" />
                <div className="infoLocation">
                    <h3>Yogja,INA</h3>
                    <span>100 Smith Street <br /> Collingwood VIC 3066 AU</span>
                </div>
            </div>
            <div className="allCards">
                <div className="infoCard">
                    <h3>Support</h3>
                    <span>Our friendly team is here to help.</span>
                    <h4>support@sans.com</h4>
                </div>
                <div className="infoCard">
                    <h3>Sales</h3>
                    <span>Questions or queries? Get in touch!</span>
                    <h4>sales@sans.com</h4>
                </div>
                <div className="infoCard">
                    <h3>Phone</h3>
                    <span>Mon-Fri from 8am to 5pm.</span>
                    <h4>+1 (435) 345-7655</h4>
                </div>
            </div>
        </div>
        <div className="listFoter">
            <div className="listFotText">
                <h1>890+</h1>
                <span>Some big companies that we work with, and trust us very much</span>
            </div>
            <div>
                <div>
                    <img src="/src/pages/contact-page/pages/branch-One/Airbnb Logo.png" alt="" />
                    <img src="/src/pages/contact-page/pages/branch-One/Amazon Logo.png" alt="" />
                    <img src="/src/pages/contact-page/pages/branch-One/FedEx Logo.png" alt="" />
                    <img src="/src/pages/contact-page/pages/branch-One/Microsoft Logo.png" alt="" />
                </div>
                <div>
                    <img src="/src/pages/contact-page/pages/branch-One/Google Logo.png" alt="" />
                    <img src="/src/pages/contact-page/pages/branch-One/OLA Logo.png" alt="" />
                    <img src="/src/pages/contact-page/pages/branch-One/Walmart Logo.png" alt="" />
                    <img src="/src/pages/contact-page/pages/branch-One/OYO Logo (1).png" alt="" />
                </div>
            </div>
        </div>

        <div className="listTwo">
            <div className="infoInputs">
                <div>
                    <h1>Let's level up your brand</h1>
                    <span>You can reach us anytime hellosansbrothers@gmail.com</span>
                </div>
                <div>
                    <p>First Name</p>
                    <input type="text" name="" id="" className="inpName" placeholder="First Name" />
                    <p>Last Name</p>
                    <input type="text" name="" id="" placeholder="Last Name" />

                </div>
                <p>Email</p>
                <input type="email" name="" id="" placeholder="Email" className="inpEmailListTwo" />
                <p>Phone number</p>
                <input type="number" name="" id="" placeholder="Number" className="inpNuberlListTwo" />
                <p>Message</p>
                <input type="text" name="" id=""  className="inpMessageListTwo"/>
                <button>Get Started</button>

            </div>
            <div className="divClaping">
                <img src="/src/pages/contact-page/pages/branch-One/cloping.png" alt="" />

            </div>
        </div>


    </>
}