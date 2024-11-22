export function Button({ title }) {
    return <>
        <button className="black_btn">{title}</button>
    </>
}
export default function Cards({ img, text, desc }) {
    return <>
        <div className="box_card">
            <span><img style={{ width: "2vw" }} src={img} alt="" /></span>
            <p>{text}</p>
            <span>{desc}</span>
        </div>
    </>
}
export function Check({ text }) {
    return <>
        <div className="check_box flex align_center">
            <img style={{ width: "1vw" }} src="src/pages/home-page/img/check.png" alt="" />
            <p>{text}</p>
        </div>
    </>
}
export function Text({ text, desc }) {
    return <>
        <div className="flex column ">
            <h1 className="text_text">{text}</h1>
            <span className="text_desc">{desc}</span>
        </div>
    </>
}
export function CardCustom({ img, title, desc }) {
    return <>
        <div style={{ gap: "20px" }} className="flex">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="flex column">
                <h1>{title}</h1>
                <span>{desc}</span>
            </div>
        </div>
    </>
}
export function TrendingCard({ img, date, text }) {
    return <>
        <div className="trendin_card">
            <div className="flex column">
                <img style={{ }} className="img image" src={img} alt="" />
                <span style={{ color: "#7E8492" }}>{date}</span>
            </div>
            <h1>{text}</h1>
        </div>
    </>
}
export function RatingCard() {
    return <>
        <div className="flex justify-content-c ">
            <div className="rating_box">
                <span><img src="src/pages/home-page/img/star.png" alt="" /> 5.0</span>
                <h1>“With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”</h1>
                <div className="flex align_center">
                    <img src="src/pages/home-page/img/avatar.png" alt="" />
                    <div className="flex column">
                        <p>Renee Wells</p>
                        <span style={{color:"#848892"}}>Product Designer, Quotient</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}