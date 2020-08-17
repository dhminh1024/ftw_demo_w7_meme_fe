import React from "react";
import { Nav, Form, Row, Col, Button } from "react-bootstrap";

const SideMenu = () => {
  return (
    <Nav className="col-md-3 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <h6 className="sidebar-heading px-3 mt-4 mb-1 text-muted">
          <span>TEXT 1</span>
        </h6>
        <Form>
          <Form.Group as={Row} className="px-2 mb-1">
            <Col>
              <Form.Control type="text" placeholder="Text content.." />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="px-2 mb-0">
            <Form.Label column sm={7}>
              Color
            </Form.Label>
            <Col sm={5}>
              <Form.Control size="sm" as="select" defaultValue="BLACK">
                <option>BLACK</option>
                <option>WHITE</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="px-2 mb-0">
            <Form.Label column sm={7}>
              Font Size
            </Form.Label>
            <Col sm={5}>
              <Form.Control size="sm" as="select" defaultValue="32">
                <option>12</option>
                <option>32</option>
                <option>64</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="px-2 mb-0">
            <Form.Label column sm={7}>
              Vertical Align
            </Form.Label>
            <Col sm={5}>
              <Form.Control size="sm" as="select" defaultValue="Middle">
                <option>Top</option>
                <option>Middle</option>
                <option>Bottom</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="px-2">
            <Form.Label column sm={7}>
              Horizontal Align
            </Form.Label>
            <Col sm={5}>
              <Form.Control size="sm" as="select" defaultValue="Center">
                <option>Left</option>
                <option>Center</option>
                <option>Right</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <h6 className="sidebar-heading px-3 mt-4 mb-1 text-muted">
            <span>TEXT 2</span>
          </h6>
          <Form.Group as={Row} className="px-2 mb-1">
            <Col>
              <Form.Control type="text" placeholder="Text content.." />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="px-2 mb-0">
            <Form.Label column sm={7}>
              Color
            </Form.Label>
            <Col sm={5}>
              <Form.Control size="sm" as="select" defaultValue="BLACK">
                <option>BLACK</option>
                <option>WHITE</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="px-2 mb-0">
            <Form.Label column sm={7}>
              Font Size
            </Form.Label>
            <Col sm={5}>
              <Form.Control size="sm" as="select" defaultValue="32">
                <option>12</option>
                <option>32</option>
                <option>64</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="px-2 mb-0">
            <Form.Label column sm={7}>
              Vertical Align
            </Form.Label>
            <Col sm={5}>
              <Form.Control size="sm" as="select" defaultValue="Middle">
                <option>Top</option>
                <option>Middle</option>
                <option>Bottom</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="px-2">
            <Form.Label column sm={7}>
              Horizontal Align
            </Form.Label>
            <Col sm={5}>
              <Form.Control size="sm" as="select" defaultValue="Center">
                <option>Left</option>
                <option>Center</option>
                <option>Right</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Button className="btn-block" type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </div>
    </Nav>
  );
};

export default SideMenu;
