import { useEffect, useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from './assets/images/Professional Logo.png';
import navIcon1 from './assets/images/navIcon1.png';
import navIcon2 from './assets/images/navIcon2.png';
import navIcon3 from './assets/images/navIcon3.png';

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

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(value);
    }

    return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#AboutMe" className={activeLink === 'AboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('AboutMe')}>About Me</Nav.Link>
            <Nav.Link href="#Projects" className={activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
             <a href="#"><img src={navIcon1} alt="" /></a>  
             <a href="#"><img src={navIcon2} alt="" /></a>   
             <a href="#"><img src={navIcon3} alt="" /></a>   
            </div> 
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button> 
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
    )

}