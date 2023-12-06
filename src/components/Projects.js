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
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';



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
        appURL: ''
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
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <Row md={3}>
                                        {projects.map((project, index) => (
                                            <Col key={index} className="mb-4">
                                                <ProjectCard {...project} />
                                            </Col>
                                        ))}
                                    </Row>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects;