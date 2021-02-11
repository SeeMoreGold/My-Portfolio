import React from "react";
import { Container, Row, Col } from "../../components/Grid";
import { CardDeck, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquare,
  faEnvelopeSquare,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ProjectCards() {
  return (
    <Container fluid>
      <Row>
      <Col size="md-1">
        </Col>
        <Col size="md-10">
          <div className="container-fluid">
            <CardDeck>
                {/* This Card is for Github */}
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h1 className="text-center">
                    </h1>
                  </Card.Title>
                  <Card.Text h1 className="text-center">
                    <Card.Link
                      target="_blank"
                      href="https://github.com/SeeMoreGold"
                    >
                      github.com/SeeMoreGold
                    </Card.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
              
              {/* This Card is for Linkedin */}
              <Card>
                <Card.Body>
                    
                  <Card.Title>
                    <h1 className="text-center">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </h1>
                  </Card.Title>
                  <Card.Text h1 className="text-center">
                    <Card.Link
                      target="_blank"
                      href="https://www.linkedin.com/in/seemoregold/"
                    >
                      linkedin.com/in/seemoregold
                    </Card.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <div className="container-fluid">
            <CardDeck>
                {/* This Card is for Email */}
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h1 className="text-center">
                      <FontAwesomeIcon icon={faEnvelopeSquare} />
                    </h1>
                  </Card.Title>
                  <Card.Text h1 className="text-center">
                    moreau.cj@gmail.com
                  </Card.Text>
                </Card.Body>
              </Card>
              
              {/* This Card is for Phone */}
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h1 className="text-center">
                      <FontAwesomeIcon icon={faPhoneSquare} />
                    </h1>
                  </Card.Title>
                  <Card.Text h1 className="text-center">
                    724-322-2687
                  </Card.Text>
                </Card.Body>
              </Card>
              
              {/* This Card is for Resume */}
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h1 className="text-center">
                      <FontAwesomeIcon icon={faFileAlt} />
                    </h1>
                  </Card.Title>
                  <Card.Text h1 className="text-center">
                    <Card.Link
                      target="_blank"
                      href="https://drive.google.com/file/d/1_o140BsPe8w3rgXLSLYa5vXK9N6jvpOk/view?usp=sharing"
                    >
                      Resume
                    </Card.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default ProjectCards;
