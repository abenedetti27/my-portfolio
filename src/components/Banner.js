import { Container, Row } from "react-bootstrap"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to Anna's Portfolio</span>
                        <h1>{I am Anna}</h1>
                </Row>
            </container> 
        </section>
    )
}