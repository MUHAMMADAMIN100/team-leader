import './footer.css'
import FooterLogo from './images/Logo (6).png'
export function Footer({}) 
{
    return <>
    
        <div className="FooterDiv">
                <div className="FooterDivThink">

                    <div className='FooterDivThinkTexts'>
                        <h1 className='FooterH1Think'>Think beyond the wave</h1>
                        <p className='FooterPTexts'>Ask about Sans products, pricing, implementation, or anything <br /> else. Our highly trained reps are standing by, ready to help</p>
                    </div>

                    <div className='FooterDivTextTry'>
                        <span className='FooterSpanText'>Try for free</span>
                    </div>

                </div>
                
                <div className="FooterDivinfo">
                    <div className="FooterDivLogoAndText">
                        <div><img src={FooterLogo}alt="" /></div>
                        <p className='FooterPTexts'>We built an elegant solution. Our team <br /> created a fully integrated sales and <br /> marketing solution for SMBs</p>
                    </div>
                    <div className="FooterDivInfoTexts">

                        <div className="FooterDivvDecrip">
                                <div className="FooterCompany">
                                    <h1 className='H1Title'>Company</h1>
                                    <p className='FooterPTexts'>About</p>
                                    <p className='FooterPTexts'>Pricing</p>
                                    <p className='FooterPTexts'>Jobs</p>
                                    <p className='FooterPTexts'>Blog</p>
                                </div>

                                <div className="FooterProduct">
                                    <h1 className='H1Title'>Product</h1>
                                    <p className='FooterPTexts'>Sales Software</p>
                                    <p className='FooterPTexts'>Marketplace</p>
                                    <p className='FooterPTexts'>Terms & Conditions</p>
                                    <p className='FooterPTexts'>Privacy Policy</p>
                                </div>

                                <div className="FooterDiscover">
                                    <h1 className='H1Title'>Discover</h1>
                                    <p className='FooterPTexts'>CRM Comparision</p>
                                    <p className='FooterPTexts'>Partner Program</p>
                                    <p className='FooterPTexts'>What is CRM</p>
                                    <p className='FooterPTexts'>Resource</p>
                                </div>

                                <div className="FooterHelpCenter">
                                    <h1 className='H1Title'>Help Center</h1>
                                    <p className='FooterPTexts'>Community</p>
                                    <p className='FooterPTexts'>Knowledge Base</p>
                                    <p className='FooterPTexts'>Academy</p>
                                    <p className='FooterPTexts' >Support</p>
                                </div>
                        </div>
                    </div>
                </div>

        </div>
    
    </>    
}