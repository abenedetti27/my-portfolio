import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1 from "../assets/images/apiadventures.gif";
import project2 from "../assets/images/gonutzdonutz.png";
import project3 from "../assets/images/weatherdb.png";
import project4 from "../assets/images/workdayscheduler.png";
import project5 from "../assets/images/jate.png";
import project6 from "../assets/images/coderefactor.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
    const projects = [
    {
        title: 'API Adventures',
        imgURL: project1,
        repoURL: 'https://github.com/Truecoding4life/api-adventures',
        appURL: 'https://frozen-mesa-56300-52dd9f520f9a.herokuapp.com/'
    },

    {
        title: 'Go Nutz Donutz',
        imgURL: project2,
        repoURL: 'https://github.com/abenedetti27/gonutzfordonutz',
        appURL: 'https://flimits.github.io/gonutzfordonutz/'
    },

    {
        title: 'Weather Dashboard',
        imgURL: project3,
        repoURL: 'https://github.com/abenedetti27/dashboard-weather',
        appURL: 'https://abenedetti27.github.io/dashboard-weather/'
    },

    {
        title: 'Work Day Scheduler',
        imgURL: project4,
        repoURL: 'https://github.com/abenedetti27/work-day-scheduler',
        appURL: 'https://abenedetti27.github.io/work-day-scheduler/' 
    },

    {
        title: 'Just Another Text Editor',
        imgURL: project5,
        repoURL: 'https://github.com/abenedetti27/text-editor',
    },

    {
        title: 'Code Refactor',
        imgURL: project6,
        repoURL: 'https://github.com/abenedetti27/sustain-the-groove',
        appURL: 'https://abenedetti27.github.io/sustain-the-groove/'
    },

    ];
    return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


export default Projects;