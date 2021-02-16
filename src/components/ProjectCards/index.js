import React from "react";
import pourDecisions from "../../img/pourdecisions.png";
import pwGenerator from "../../img/pwgenerator.png";
import innerNet from "../../img/innernet.png";
import { Container, Row, Col } from "../../components/Grid";
import { CardDeck, Card } from "react-bootstrap";

function ProjectCards() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <div className="container-fluid">
            <CardDeck>
              {/* This Card is for Pour Decisions */}
              <Card>
                <Card.Img variant="top" src={pourDecisions} />
                <Card.Body className="text-center">
                  <Card.Text className="text-center">
                    <p>A fun meal planning app.</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Card.Link
                    target="_blank"
                    href="https://jrtwheeler.github.io/Pour-Decision/"
                  >
                    Deployed Site
                  </Card.Link>
                  <Card.Link
                    target="_blank"
                    href="https://github.com/SeeMoreGold/Pour-Decision"
                  >
                    Github Repo
                  </Card.Link>
                </Card.Footer>
              </Card>

              {/* This Card is for Password Generator */}
              <Card>
                <Card.Img variant="top" src={pwGenerator} />
                <Card.Body>
                  <Card.Text className="text-center">
                    <p>Generate a random password.</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                <Card.Link
                    target="_blank"
                    href="https://seemoregold.github.io/Password-Generator/"
                  >
                    Deployed Site
                  </Card.Link>
                  <Card.Link
                    target="_blank"
                    href="https://github.com/SeeMoreGold/Password-Generator"
                  >
                    Github Repo
                  </Card.Link>
                </Card.Footer>
              </Card>

              {/* This Card is for innerNet */}
              <Card>
                <Card.Img variant="top" src={innerNet} />
                <Card.Body>
                  <Card.Text className="text-center">
                    <p>A personal bookmark app.</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                <Card.Link
                    target="_blank"
                    href="https://innernet.herokuapp.com/login"
                  >
                    Deployed Site
                  </Card.Link>
                  <Card.Link
                    target="_blank"
                    href="https://github.com/SeeMoreGold/innerNet"
                  >
                    Github Repo
                  </Card.Link>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
        </Col>
      </Row>
      
      <Row>
        <Col size="md-12">
          <div className="container-fluid">
            <CardDeck>
              {/* This Card is for Work Day Scheduler */}
              <Card>
                <Card.Img variant="top" src={pourDecisions} />
                <Card.Body className="text-center">
                  <Card.Text className="text-center">
                    <p>A fun meal planning app.</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Card.Link
                    target="_blank"
                    href="https://jrtwheeler.github.io/Pour-Decision/"
                  >
                    Deployed Site
                  </Card.Link>
                  <Card.Link
                    target="_blank"
                    href="https://github.com/SeeMoreGold/Pour-Decision"
                  >
                    Github Repo
                  </Card.Link>
                </Card.Footer>
              </Card>

              {/* This Card is for Password Generator */}
              <Card>
                <Card.Img variant="top" src={pwGenerator} />
                <Card.Body>
                  <Card.Text className="text-center">
                    <p>Generate a random password.</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                <Card.Link
                    target="_blank"
                    href="https://seemoregold.github.io/Password-Generator/"
                  >
                    Deployed Site
                  </Card.Link>
                  <Card.Link
                    target="_blank"
                    href="https://github.com/SeeMoreGold/Password-Generator"
                  >
                    Github Repo
                  </Card.Link>
                </Card.Footer>
              </Card>

              {/* This Card is for innerNet */}
              <Card>
                <Card.Img variant="top" src={innerNet} />
                <Card.Body>
                  <Card.Text className="text-center">
                    <p>A personal bookmark app.</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                <Card.Link
                    target="_blank"
                    href="https://innernet.herokuapp.com/login"
                  >
                    Deployed Site
                  </Card.Link>
                  <Card.Link
                    target="_blank"
                    href="https://github.com/SeeMoreGold/innerNet"
                  >
                    Github Repo
                  </Card.Link>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default ProjectCards;
