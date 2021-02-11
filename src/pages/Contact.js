import React from "react";
import ContactCards from "../components/ContactCards";
import { Col, Row, Container } from "../components/Grid";

const Contact = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-2">
                </Col>
                <Col size="md-8">
                    <h6 className="text-center">CONTACT ME</h6>
                    <br />
                    <ContactCards />
                </Col>
                <Col size="md-2">
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;