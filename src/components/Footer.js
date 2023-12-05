import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/tplogo.png";
import navIcon1 from "../assets/images/navIcon1.png";
import navIcon2 from "../assets/images/navIcon2.png";
import navIcon3 from "../assets/images/navIcon3.png";

export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" style={{ width: '40%', height: 'auto' }}/>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/abenedetti27"><img src={navIcon1} alt="Icon" style={{ width: '5%', height: 'auto' }}/></a>
              <a href="https://www.linkedin.com/in/anna-rose-benedetti/"><img src={navIcon2} alt="Icon" style={{ width: '5%', height: 'auto' }}/></a>
              <a href="https://www.instagram.com/annadoesntmatch/"><img src={navIcon3} alt="Icon" style={{ width: '5%', height: 'auto' }}/></a>
            </div>
            <p>Copyright Anna Rose Benedetti 2023. All Rights Reserved</p>
            </Col>
            </Row>
        </Container>

        </footer>
    )
}

export default Footer;