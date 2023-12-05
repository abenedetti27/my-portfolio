import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/images/abpic.jpeg';


export const Header = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['', ''];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let intervalId = setInterval(() => {
            time();
        },delta)

        return () => clearInterval(intervalId);
    }, [text])

    const time = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (!isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }
        if (isDeleting && text === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNum(prevLoopNum => prevLoopNum + 1);
            setDelta(500);
        }
        }
    
        return (
        <section className="header" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) => 
                        <div className={isVisible ? 'animate_animated animate_fadeIn' : ''}>
                            <span className="tagline">Welcome to Anna's Portfolio</span>
                            <h1>{'Editor | Developer'}<span className="wrap">{text}</span></h1>
                                <p>Hello! I'm Anna, a web developer, content strategist and editor based in Seattle. I have a Bachelor's Degree in liberal arts from the University of Washington, and have been working in the fashion industry, in many capacities, for the past 13 years. Throughout my career, I've had the opportunity to work as a buyer, run a fashion closet, own strategies for social media, an e-commerce site, and editorial content. When I'm not working, I'm passionate about hiking, traveling, going on adventures with my kid, and exploring the Seattle restaurant scene with my wife.</p>
                                <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                        {({isVisible}) => 
                        <div className={isVisible ? 'animate_animated animate_fadeIn' : ''}>
                        <img src={headerImg} alt="Anna in Porto" style={{ width: '100%', height: 'auto' }} />
                        </div>}
                    </TrackVisibility>
                    </Col>    
                </Row>
            </Container> 
        </section>
    )
}

export default Header;