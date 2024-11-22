import './header.css'
import HeaderImg from './images/Logo (5).png'
import HeaderIcon from './images/Icon (7).png'

export function Header()
{
    return <>

        <div className="HeaderDiv">
            <div className="HeaderLogo"><img src={HeaderImg} alt="" /></div>
            <div className="HeaderTexts">
                <p className='HeaderPText'>Home</p>
                <p className='HeaderPText'>About</p>
                <p className='HeaderPText'>Blog</p>
                <p className='HeaderPText'>Pricing</p>
                <p className='HeaderPText HeaderContact'>Contact Us</p>
            </div>
            <img className='HeaderIcon' src={HeaderIcon} alt="" />
        </div>
    
    </>    
}