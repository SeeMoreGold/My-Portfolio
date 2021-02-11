import React from "react";
import { Container, Row, Col } from "../../components/Grid";
import { CardDeck, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faDatabase } from "@fortawesome/free-solid-svg-icons"
import {
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faReact,
  faNode,
  faBootstrap
} from "@fortawesome/free-brands-svg-icons";

function SkillsCards() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-1"></Col>
        <Col size="md-10">
          <div className="container-fluid">
            <CardDeck>
              {/* This Card is for JavaScript */}
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h1 className="text-center">
                      <FontAwesomeIcon icon={faJsSquare} />
                    </h1>
                  </Card.Title>
                  <Card.Text h1 className="text-center">
                    JavaScript
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* This Card is for HTML */}
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h1 className="text-center">
                      <FontAwesomeIcon icon={faHtml5} />
                    </h1>
                  </Card.Title>
                  <Card.Text h1 className="text-center">
                    HTML
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* This Card is for CSS */}
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h1 className="text-center">
                      <FontAwesomeIcon icon={faCss3Alt} />
                    </h1>
                  </Card.Title>
                  <Card.Text h1 className="text-center">
                    CSS
                  </Card.Text>
                </Card.Body>
              </Card>
            
               {/* This Card is for React */}
               <Card>
                <Card.Body>
                  <Card.Title>
                    <h1 className="text-center">
                      <FontAwesomeIcon icon={faReact} />
                    </h1>
                  </Card.Title>
                  <Card.Text h1 className="text-center">
                    Reactjs
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
        </Col>
        <Col size="md-1"></Col>
      </Row>
      <Row>
      <Col size="md-1"></Col>
        <Col size="md-10">
          <div className="container-fluid">
          <CardDeck>
              {/* This Card is for Node.js */}
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h1 className="text-center">
                      <FontAwesomeIcon icon={faNode} />
                    </h1>
                  </Card.Title>
                  <Card.Text h1 className="text-center">
                    Node.js
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* This Card is for Bootstrap */}
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h1 className="text-center">
                      <FontAwesomeIcon icon={faBootstrap} />
                    </h1>
                  </Card.Title>
                  <Card.Text h1 className="text-center">
                    Bootstrap
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* This Card is for Git */}
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h1 className="text-center">
                      <FontAwesomeIcon icon={faCodeBranch} />
                    </h1>
                  </Card.Title>
                  <Card.Text h1 className="text-center">
                    Git
                  </Card.Text>
                </Card.Body>
              </Card>
            
               {/* This Card is for MongoDb */}
               <Card>
                <Card.Body>
                  <Card.Title>
                    <h1 className="text-center">
                      <FontAwesomeIcon icon={faDatabase} />
                    </h1>
                  </Card.Title>
                  <Card.Text h1 className="text-center">
                    MongoDb
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
        </Col>
        <Col size="md-1"></Col>
      </Row>
    </Container>
  );
}
export default SkillsCards;
