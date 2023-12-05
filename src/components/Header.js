import { Container, Row, col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"


export const Header = () => {
    return (
        <section className="header" id="home">
            <container>
                <Row className="align-items-center">
                    <col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to Anna's Portfolio</span>
                        <h1>{'I am Anna'}<span className="wrap">editor | developer</span></h1>
                        <p>Hello! I'm Anna, a web developer, content strategist and editor based in Seattle. I have a Bachelor's Degree in liberal arts from the University of Washington, and have been working in the fashion industry, in many capacities, for the past 13 years. Throughout my career, I've had the opportunity to work as a buyer, run a fashion closet, own strategies for social media, an e-commerce site, and editorial content. When I'm not working, I'm passionate about hiking, traveling, going on adventures with my kid, and exploring the Seattle restaurant scene with my wife.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                    </col>
                    <col xs={12} md={6} xl={5}>
                        <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0dGxlcyUyMGFuZCUyMGVkaXRvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="header-img" />
                    </col>    
                </Row>
            </container> 
        </section>
    )
}