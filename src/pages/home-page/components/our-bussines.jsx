import { Text } from "./components";

export default function Business() {
    return <>
        <div className="flex justify-content-a cards_flex">
            <Text text={"17k"} desc={"happy customers on worldwide"} />
            <Text text={"15+"} desc={"Hours of work experience"} />
            <Text text={"50+"} desc={"Creativity & passionate members"} />
            <Text text={"100+"} desc={"Integrations lorem ipsum integrations"} />
        </div>
        <div style={{ padding: "3vw" }}>
            <img className="img" src="src/pages/home-page/img/people.png" alt="" />
        </div>
        <div style={{ padding: "2vw" }} className="flex text_business align_center">
            <div>
                <h1 style={{ fontSize: "2vw" }}>Lift your business to new heights with our digital marketing services</h1>
            </div>
            <div>
                <span className="business_text" style={{ fontSize: "1.3vw", color: "#878787" }}>To build software that gives customer facing teams in small and medium-sized businesses the ability to create rewarding and long-lasting relationships with customers</span>
            </div>
        </div>
    </>
}