import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1 from "../assets/images/apiadventures.gif";
import project2 from "../assets/images/gonutzdonutz.png";
import project3 from "../assets/images/coderefactor.png";
import project4 from "../assets/images/coderefactor.png";
import project5 from "../assets/images/coderefactor.png";
import project6 from "../assets/images/coderefactor.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
    {
        title: 'API Adventures',
        description: 'A full stack application that allows users to search for hikes in the Seattle area, and save them to their profile.',
        imgURL: project1,
    },

    {
        title: 'Go Nutz Donutz',
        description: 'A full stack application that allows users to search for hikes in the Seattle area, and save them to their profile.',
        imgURL: project2,
    },

    {
        title: 'Code Refactor',
        description: 'A full stack application that allows users to search for hikes in the Seattle area, and save them to their profile.',
        imgURL: project3,
    },

    {
        title: 'Code Refactor',
        description: 'A full stack application that allows users to search for hikes in the Seattle area, and save them to their profile.',
        imgURL: project4,
    },

    {
        title: 'Code Refactor',
        description: 'A full stack application that allows users to search for hikes in the Seattle area, and save them to their profile.',
        imgURL: project5,
    },

    {
        title: 'Code Refactor',
        description: 'A full stack application that allows users to search for hikes in the Seattle area, and save them to their profile.',
        imgURL: project6,
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


