import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Form from "react-bootstrap/Form";
export const Contact = () => {
  const [formState, setFormState] = useState({
    message: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { email, message } = formState;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };
  const handleChange = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="ms-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                name="name"
                placeholder="First Last"
                onBlur={handleChange}
                style={{ width: "400px" }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                onBlur={handleChange}
                style={{ width: "400px" }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={3}
                onBlur={handleChange}
                style={{ width: "400px" }}
              />
            </Form.Group>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button type="submit">
              <span>Submit</span>
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
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

