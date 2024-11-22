import './about.css'

export default function About() {
    return <>
        <div className="title">
            <h1>Everything you need to get the attention of your audience</h1>
        </div>

        <div className="mainDesc">
            <div className="line">
                <div className="lineCont">
                    <img src="src/pages/about-page/about-img/Line 69.png" alt="" />
                </div>
                <div className="descText">
                    <h2>Our digital agency helps clients develop, implement and maintain successful digital marketing strategies across all channels. Also work with you to build your website and create online businesses that grow.</h2>
                </div>
            </div>



            <div className="logoArrow">
                <img src="src/pages/about-page/about-img/Linked Path.png" alt="" />
            </div>
        </div>

        <div className="imgOfficce">
            <div className="laptop">
                <img width={'100%'} src="src/pages/about-page/about-img/Rectangle 13.png" alt="" />
            </div>

            <div className="team">
                <img width={'100%'} src="src/pages/about-page/about-img/Rectangle 37.png" alt="" />

                <h2>What we believe in</h2>
                <p>Over the years at Sans, we’ve put a lot of thought into what it is that makes us who we are. The qualities that unite us, that make us such an effective team, and...</p>

                <button className='btnMore'>See Details</button>
            </div>

            <div className="gilrCont">
                <img width={'100%'} src="src/pages/about-page/about-img/girls.png" alt="" />
            </div>
        </div>


        <hr style={{ color: 'gray', margin: '70px 10%' }} />


        <div className="powerful">
            <h1>Powerful ideas & sales acceleration</h1>

            <p>We are a software development firm specializing in digital products. We build beautiful, functional and cross-platform solutions that are accessible to all.</p>

        </div>

        <div className="meet">
            <h1>Meet our team of creators, designers, and world-class problem solvers</h1>
            <p>To become the company that customers want, it takes a group of passionate people. Get to know the people who lead</p>

        </div>

        <div className="profs">
            <Person desc='Founder & CEO' img='src/pages/about-page/about-img/Frame 1171275129.png' title='Arlyne Stefano' bigImg='src/pages/about-page/about-img/Rectangle 4.png'></Person>
            <Person desc='Founder & CEO' img='src/pages/about-page/about-img/Frame 1171275129.png' title='Arlyne Stefano' bigImg='src/pages/about-page/about-img/Rectangle 5.png'></Person>
            <Person desc='Founder & CEO' img='src/pages/about-page/about-img/Frame 1171275129.png' title='Arlyne Stefano' bigImg='src/pages/about-page/about-img/Rectangle 6.png'></Person>
        </div>

        <div className="powerful">
            <h1>Join our team, The one with the master touch</h1>

            <p>We believe it takes great people to make a great product. That’s why we hire not only the perfect professional fits, but people who embody our company values.</p>

        </div>
    </>

}


export function Person(props) {
    return <>
        <div className="person">
            <img width={'100%'} src={props.bigImg} alt="" />

            <div className="socialCont">
                <h4>{props.title}</h4>

                <img height={'30px'} src={props.img} alt="" />
            </div>

            <p style={{ marginTop: '-10px', color: 'gray' }}>{props.desc}</p>
        </div>
    </>
}