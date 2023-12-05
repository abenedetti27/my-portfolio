import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import ProfessionalLogo from '../assets/images/tplogo.png';
import navIcon1 from '../assets/images/navIcon1.png';
import navIcon2 from '../assets/images/navIcon2.png';
import navIcon3 from '../assets/images/navIcon3.png';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = e => {
            if (window.scrollY > 300) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <section className="header" id="home">
        <Router>
          <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
            <Navbar.Brand as={ScrollLink} to="home" spy={true} smooth={true} duration={500}>
                <img src={ProfessionalLogo} alt="logo" style={{ width: '50%', height: 'auto' }}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <ScrollLink to="home" spy={true} smooth={true} duration={500}>
                                Home
                            </ScrollLink>
                            <ScrollLink to="aboutme" spy={true} smooth={true} duration={500}>
                                About Me
                            </ScrollLink>
                            <ScrollLink to="projects" spy={true} smooth={true} duration={500}>
                                Projects
                            </ScrollLink>
                        </Nav>
            <span className="navbar-text">
            <div className="social-icon">
             <a href="https://github.com/abenedetti27"><img src={navIcon1} alt="github" style={{ width: '10%', height: 'auto' }}/></a>  
             <a href="https://www.linkedin.com/in/anna-rose-benedetti/"><img src={navIcon2} alt="linkedin" style={{ width: '10%', height: 'auto' }}/></a>   
             <a href="https://www.instagram.com/annadoesntmatch/"><img src={navIcon3} alt="instagram" style={{ width: '10%', height: 'auto' }}/></a>   
            </div> 
            {/* <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>  */}
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
    </section>
  );
}

export default NavBar;
