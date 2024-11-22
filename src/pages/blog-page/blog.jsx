
import { Comp } from "./component/comp"

import img1 from "./assets/Logo.png"
import img2 from "./assets/Image.png"
 import img3 from "./assets/Image (2).png"
 import img4 from "./assets/Image (5).png"
 import img5 from "./assets/Rectangle 34.png"
 import img6 from "./assets/Rectangle 35.png"
 import img7 from "./assets/Rectangle 37 (1).png"
 import img8 from "./assets/Rectangle 36.png"
 import imgArow from "./assets/Button Arrow.png"
 import img9 from "./assets/Image (4).png"
 import img10 from "./assets/Image (6).png"
 import imgLine from "./assets/Line 69.png"


import "./blog.css"


export default function Blog(){
    return <>
   <div className="FirstBaground">


<div className="divHeder">


</div>


 <h1 style={{margin:"50px 5%",fontSize:"50px"}}>Activity & Updates</h1>
<div className="SecondDiv">
 <img src={imgLine} alt="" />
<p>Our biggest challenge is making sure we're always designing and building products that will help you run your business better. </p>
</div>


<div className="divTherd">  
 <h3>View all</h3>
    <p>Design</p>
    <p>Articles</p>
    <p>Product</p>
    <p>Software Development</p>
    <p>Customer Success</p>
  
  </div>


  </div>


<div className="firstDiveComp">
  <Comp none="none" src={img2}  text="Published in Insight Jan 30, 2021" name="Practice making User Flow" text2="In this article, we'll cover how to create user flows"/>
  <Comp none="none" src={img3}  text="Published in Insight Jan 30, 2021" name="Overview of the Design Principles" text2="What are Design Principles?… To understand design principles, we first discuss the principles. "/>
  <Comp none="none" src={img4}  text="Published in Insight Jan 30, 2021" name="Using Grid in website design" text2="Andi: What's the grid like? Toni: Like below…"/>

</div>


<div className="SecondDivComp">

  <Comp none="none" pa="0px 100px" width="500px" margimg="0px 100px" src={img5} name="How we perform long-running tasks using AWS services" text2="Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools."/>
  <Comp none="none" width="500px" src={img6} name="HHow to ask when doing User Research" text2="Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools."/>
  <Comp none="none" pa="0px 100px" width="500px" height="400px" margimg="0px 100px" src={img7} name="Layout Exploration — Simple exercise but big effect" text2="Make alternatives or other options for the design we are making.
For example, we are creating a website design. Then there is the testimonial section."/>
 <Comp  none="none" width="500px" src={img8} name="Webflow Break the Coding Barrier" text2="Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools."/>

</div>

<div style={{display:"flex",margin:"auto" ,marginTop:"100px" ,width:"85%",marginLeft:"5%", justifyContent:"space-between", alignItems:"center"}}>
  <div>
    <h1 style={{fontSize:"40px"}}>Articles</h1>
  <p>Complex tech decoded by engineers,<br /> business  trends analyzed by experts.</p> 
  </div>
 
  <img style={{width:"80px"}} src={imgArow} alt="" />
</div>



<div className="TherdDivComp">
<Comp width="450px" butText="Read More" src={img9} name="How we perform long-running tasks using AWS services" text2="Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools."/>
  <Comp  width="450px" butText="Read More" src={img4} name="HHow to ask when doing User Research" text2="Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools."/>
  <Comp   width="450px" butText="Read More"  src={img10} name="Layout Exploration — Simple exercise but big effect" text2="Make alternatives or other options for the design we are making.For example, we are creating a website design. Then there is the testimonial section."/>
</div>


<h1 style={{margin:"60px 10%",fontSize:"50px"}}>Activity & Updates</h1>
<div className="SecondDiv">
   <img src={imgLine} alt="" />
  <p>Our biggest challenge is making sure we're always designing and building products that will help you run your business better. </p>
<button style={{backgroundColor:"black", borderRadius:"30px" ,fontSize:"20px" ,padding:"10px" ,color:"white", marginLeft:"50%" ,marginTop:"-150px"}}>Try for free</button>
</div>


<div className="EndDiv">
  <div>
    <img src={img1} alt="" />
    <p>We built an elegant solution. <br />
     Our team created a fully integrated <br />
      sales and marketing solution for SMBs</p>
  </div>

  <div>
    <h3>Company</h3>
    <p>About</p>
    <p>Pricing</p>
    <p>Jobs</p>
    <p>Blog</p>
  </div>

  <div>
    <h3>Product</h3>
    <p>Sales Software</p>
    <p>Marketplace</p>
    <p>Terms & Conditions</p>
    <p>Privacy Policy</p>
  </div>

  <div>
    <h3>Discover</h3>
    <p>CRM Comparision</p>
    <p>Partner Program</p>
    <p>What is CRM</p>
    <p>Resource</p>
  </div>

  <div>
    <h3>Help Center</h3>
    <p>Community</p>
    <p>Knowledge Base</p>
    <p>Academy</p>
    <p>Support</p>
  </div>

</div>

<h2 style={{textAlign:"center" ,color:"#ced1d8" ,padding:"50px 0px"}}>© Copyright 2023 All Rights Reserved</h2>
    </>
}