import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Form from 'react-bootstrap/Form';

export const Contact = () => {
    const personalInfo = {
        firstName: '',
        lastName: '',
        email: ''
    }
    const [formDetails, setFormDetails] = useState(personalInfo);
    const [buttonText, setButtonText] = useState('Send Message');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
          })
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
                    ows={3}
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

//       return (
//         <section className="contact" id="connect">
//         <Container>
//           <Row className="align-items-right">
//             <Col size={12} md={6}>
//             </Col>
//             <Col size={12} md={6}>
//               <TrackVisibility>
//                 {({ isVisible }) =>
//                   <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                     <h2>Get In Touch</h2>
//                 <form onSubmit={handleSubmit}>
//                 <Row>
//   <Col size={12} sm={6} className="px-1">
//     <input
//       type="text"
//       value={formDetails.firstName}
//       placeholder="First Name"
//       onChange={(e) => onFormUpdate('firstName', e.target.value)}
//     />
//   </Col>
//   <Col size={12} sm={6} className="px-1">
//     <input
//       type="text"
//       value={formDetails.lastName}
//       placeholder="Last Name"
//       onChange={(e) => onFormUpdate('lastName', e.target.value)}
//     />
//   </Col>
//   <Col size={12} sm={12} className="px-1">
//     <input
//       type="email"
//       value={formDetails.email}
//       placeholder="Email Address"
//       onChange={(e) => onFormUpdate('email', e.target.value)}
//     />
//   </Col>
//   <Col size={12} className="px-1">
//     <textarea
//       rows="6"
//       value={formDetails.message}
//       placeholder="Message"
//       onChange={(e) => onFormUpdate('message', e.target.value)}
//     ></textarea>
//     <button type="submit">
//       <span>{buttonText}</span>
//     </button>
//   </Col>


//                     {
//                       status.message &&
//                       <Col>
//                         <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
//                       </Col>
//                     }
//                   </Row>
//                 </form>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>

