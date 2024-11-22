import './header.css'
import HeaderImg from './images/Logo (5).png'
import HeaderIcon from './images/Icon (7).png'
import { useNavigate } from 'react-router-dom'

export function Header()
{
const navigate=useNavigate()
    return <>

        <div className="HeaderDiv">
            <div className="HeaderLogo"><img src={HeaderImg} alt="" /></div>
            <div className="HeaderTexts">
                <p onClick={()=>navigate("/")} className='HeaderPText'>Home</p>
                <p onClick={()=>navigate("/about")} className='HeaderPText'>About</p>
                <p onClick={()=>navigate("/blog")} className='HeaderPText'>Blog</p>
                <p onClick={()=>navigate("/pricing")} className='HeaderPText'>Pricing</p>
                <p onClick={()=>navigate("/contact")} className='HeaderPText HeaderContact'>Contact Us</p>
            </div>
            <img className='HeaderIcon' src={HeaderIcon} alt="" />
        </div>
    
    </>    
}