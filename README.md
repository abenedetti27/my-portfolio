# React Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description <a name="description"></a>

This is a single page application portfolio containing my web development projects.

## Table of Countents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation <a name="installation"></a>
When the users loads the portfolio, they are presented with a page containing a header, section for content, and a footer. When the user views the hearer, they are presented with my name and navigation with titles corresponding to different sections of the portfolio.

The navigation titles the user is presented with are About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted. When the user clicks on a navigation title, they are presented with the corresponding section below the navigation without the page reloading and that title is highlighted.

When the portfolio is loaded the first time, the About Me title and section are selected by default. The About Me section contains a recent photo and a short bio. Th Portfolio section contains titles and images of six applications with links to the deployed application and the corresponding GitHub repository. 

Within the the Contact section there is a contact form with fields for a name, an email address, and a message. When the cursor moves out of one of the form fields without entering text, the user receives a notification that this field is required.
When text is entered into the email address field, the user receives a notification if I have entered an invalid email address.

Above the 'About Me' section is a hyperlinked resume. It is linked to a downloadable resume and a list of the developer’s proficiencies. There is also a footer with text or icon links to my GitHub, LinkedIn, and Instagram profiles. 

![Portfolio Header](image.png)
![Portfolio Footer](image-1.png)


Project Card
```
import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgURL, appURL, repoURL }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-card">
        {/* <img src={imgURL} alt="Project" /> */}
        <div className="project-details">
          <h5>{title}</h5>
          <a href={appURL} target="_blank" rel="noopener noreferrer">
            <img src={imgURL} alt={title} className="project-image" />
          </a>
          <p>
            <a href={repoURL} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;

```
Contact Form
```
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Form from 'react-bootstrap/Form';

export const Contact = () => {
    const personalInfo = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(personalInfo);
    const [buttonText, setButtonText] = useState('Send Message');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
          });
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
    
        try {
            const response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            setButtonText("Send");
            const result = await response.json();
            setFormDetails(personalInfo);
    
            if (result.code === 200) {
                setStatus({ success: true, message: 'Message sent successfully' });
            } else {
                setStatus({ success: false, message: 'Something went wrong, please try again later.' });
            }
        } catch (error) {
            console.error("Error during fetch:", error);
            setStatus({ success: false, message: 'Failed to fetch. Check console for details.' });
        }
    };
    

return (
    <Container>
        <Row>
            <Col xs={12} md={6} className="ms-auto">
                <Form onSubmit={handleSubmit}>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                type="email"
                placeholder="name@example.com"
                value={formDetails.email}
                onChange={(e) => onFormUpdate('email', e.target.value)}
                style={{width: '400px'}}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
                as="textarea"
                rows={3}
                value={formDetails.message}
                onChange={(e) => onFormUpdate('message', e.target.value)}
                style={{width: '400px'}}
            />
        </Form.Group>
        <button type="submit"><span>{buttonText}</span></button>
    </Form>
    </Col>
    </Row>
    </Container>
);
}

    
    export default Contact;

```

## Usage <a name="usage"></a>
This application is a  deployed React portfolio of web development work samples.


## License <a name="license"></a>
MIT License


## Questions <a name="questions"></a>

GitHub Profile: [github](https://github.com/abenedetti27)

Please direct any questions to:

Email: abenedetti27@gmail.com