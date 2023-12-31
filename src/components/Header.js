import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/images/abpic.jpeg';
import React from 'react';

const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(true); // <-- Corrected declaration
  
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const time = useCallback(() => {
    const toRotate = ['', ''];
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (!isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }
    if (isDeleting && text === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(prevLoopNum => prevLoopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text]);

  useEffect(() => {
    let intervalId = setInterval(() => {
      time();
    }, delta);

    return () => clearInterval(intervalId);
  }, [text, delta, time]);

  return (
    <section className="header" id="aboutme">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? 'animate_animated animate_fadeIn' : ''}>
                  <h1>Anna Rose Benedetti</h1>
                  <a href='https://drive.google.com/file/d/1dp-D9xxAviuhQk4vleS5zEF0FLPLiFR3/view?usp=drive_link' download='Anna Rose Benedetti Resume'>
                    Download Resume
                  </a>
                  <h2>{'Editor | Developer'}<span className="wrap">{text}</span></h2>
                  <p>Hello! I'm Anna, a web developer, content strategist, and editor based in Seattle. I have a Bachelor's Degree in liberal arts from the University of Washington and have been working in the fashion industry, in many capacities, for the past 13 years. Throughout my career, I've had the opportunity to work as a buyer, run a fashion closet, own strategies for social media, an e-commerce site, and editorial content. When I'm not working, I'm passionate about hiking, traveling, going on adventures with my kid, and exploring the Seattle restaurant scene with my wife.</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? 'animate_animated animate_fadeIn' : ''}>
                  <img src={headerImg} alt="Anna in Porto" style={{ width: '100%', height: 'auto' }} />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Header;