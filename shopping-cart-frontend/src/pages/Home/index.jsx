import React from "react";
import Header from "../../components/common/Header";
import withRouter from "../../withRouter";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <>
      <Header />
      <Container className="mt-5">
        <h3 className="d-flex justify-content-center align-self-center">
          Ürün Listesi
        </h3>
        <Row className="mt-5">
          <Col md={4} className="mt-5">
            <Card>
              <Card.Body>
                <Card.Title>Test Ürün</Card.Title>
                <Card.Text>Test Açıklama</Card.Text>
                <Button variant="success">Sepete Ekle</Button>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col md={4} className="mt-5">
            <Card>
              <Card.Body>
                <Card.Title>Test Ürün</Card.Title>
                <Card.Text>Test Açıklama</Card.Text>
                <Button variant="success">Sepete Ekle</Button>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col md={4} className="mt-5">
            <Card>
              <Card.Body>
                <Card.Title>Test Ürün</Card.Title>
                <Card.Text>Test Açıklama</Card.Text>
                <Button variant="success">Sepete Ekle</Button>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col md={4} className="mt-5">
            <Card>
              <Card.Body>
                <Card.Title>Test Ürün</Card.Title>
                <Card.Text>Test Açıklama</Card.Text>
                <Button variant="success">Sepete Ekle</Button>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col md={4} className="mt-5">
            <Card>
              <Card.Body>
                <Card.Title>Test Ürün</Card.Title>
                <Card.Text>Test Açıklama</Card.Text>
                <Button variant="success">Sepete Ekle</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mt-5">
            <Card>
              <Card.Body>
                <Card.Title>Test Ürün</Card.Title>
                <Card.Text>Test Açıklama</Card.Text>
                <Button variant="success">Sepete Ekle</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Home);
