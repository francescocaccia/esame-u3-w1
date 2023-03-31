import { Component } from "react";
import Avatar from "../assets/avatar.png";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";

class MyProfile extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="mt-4 pb-2">
          <Col md="auto">
            <Image src={this.props.src} fluid width="150px" alt="avatar" />
          </Col>
          <Col>
            <Form.Control className="border-0 rounded-0" value="Epicoder #1" type="text" />
            <div className="mb-4 mt-4">
              <h4 className="text-muted">Language:</h4>
              <Button className="btn-outline-light mt-2 dropdown-toggle">
                <span className="pe-4">English</span>
              </Button>
            </div>
            <hr />
            <div className="mt-2 pb-2">
              <h4 className="text-muted">Maturity Settings:</h4>
              <Button className="btn-dark fw-bold my-2">ALL MATURITY SETTINGS</Button>
              <p className="text-light mt-2">Show files for all maturity settings for this profile.</p>
              <Button className="btn-outline-secondary px-4">EDIT</Button>
            </div>

            <hr className="my-4" />

            <div>
              <h4 className="text-muted">Autoplay Controls:</h4>
              <div className="d-flex align-items-center">
                <div className="me-2">
                  <Form.Check className="bg-transparent border-white opacity-50 rounded-0" type="checkbox" checked />
                </div>
                <div>Autoplay next episode in a series on all devices</div>
              </div>
              <div className="d-flex align-items-center mt-2">
                <div className="me-2">
                  <Form.Check className="bg-transparent border-white opacity-50 rounded-0" type="checkbox" checked />
                </div>
                <div>Autoplay next episode in a series on all devices</div>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="pt-2">
          <Col>
            <Button className="btn-light fw-bold px-4">SAVE</Button>
          </Col>
          <Col>
            <Button className="btn-outline-secondary px-5">CANCEL</Button>
          </Col>
          <Col>
            <Button className="btn-outline-secondary px-5">DELETE PROFILE</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MyProfile;
