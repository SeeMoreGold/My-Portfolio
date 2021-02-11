import React from "react";
import { Container, Row, Col } from "../components/Grid";
import ProjectCards from "../components/ProjectCards";

const Projects = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-2">
                </Col>
                <Col size="md-8">
                    <h6 className="text-center">MY PROJECTS</h6>
                    <br />
                    <ProjectCards />
                </Col>
                <Col size="md-2">
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;