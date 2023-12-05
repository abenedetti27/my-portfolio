import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from 
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const personalInfo = {
        firstName: 'Anna Rose',
        lastName: 'Benedetti',
        email: 'abenedetti27@gmail.com'
    }
    const [formDetails, setFormDetails] = useState(personalInfo);
    const [buttonText, setButtonText] = useState('Send Message');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {