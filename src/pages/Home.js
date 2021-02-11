import React from "react";
import { Col, Row, Container } from "../components/Grid";

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-3">
                </Col>
                <Col size="md-6" className="text-center">
                    <div>
                        <h6 className="text-center">ABOUT ME</h6>
                        <br />
                        <p className="text-center">Graphic designer and recent graduate
                        of the full-stack web developer boot camp at John Hopkins University.
                        I’m seeking a career where I can be part of an awesome team that creates
                        beautiful, clean code. In 2012, I obtained a bachelor of science in
                        graphic design with a minor in painting. Utilizing browser-based
                        technologies, server-side development, and databases, along with my
                        newly acquired skills in JavaScript and React.js have given me the
                        opportunity to create beautiful, responsive and user-friendly
                        applications on three collaborative projects. With an eye for
                        design and a newfound passion for web development, I would be
                        a great asset to any team.
                        </p>
                    </div>
                </Col>
                <Col size="md-3">
                </Col>
            </Row>
        </Container>
    );
}

export default Home;