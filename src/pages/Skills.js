import React from "react";
import { Container, Row, Col } from "../components/Grid";
import SkillsCard from "../components/SkillsCards";

const Skills = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-2">
                </Col>
                <Col size="md-8">
                    <h6 className="text-center">MY SKILLS</h6>
                    <br />
                <SkillsCard />
                </Col>
                <Col size="md-2">
                </Col>
            </Row>
        </Container>
    );
}

export default Skills;