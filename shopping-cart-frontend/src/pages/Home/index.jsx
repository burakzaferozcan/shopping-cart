import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import withRouter from "../../withRouter";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import Notification from "../../RestAPI/Notification";
import AppUrl from "../../RestAPI/AppUrl";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    RestClient.getRequest(AppUrl.home)
      .then((res) => {
        const result = res.data.data;
        const status = res.status;
        if (status === 200) {
          setProducts(result);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        Notification.error({
          text: "Ürünler yüklenirken bir hata oluştu!",
        });
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="info" />
      </div>
    );
  }
  return (
    <>
      <Header />
      <Container className="mt-5">
        <h3 className="d-flex justify-content-center align-self-center">
          Ürün Listesi
        </h3>
        <Row className="mt-5">
          {products ? (
            products.map((product, index) => {
              return (
                <Col md={4} className="mt-5" key={index}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>Fiyat : {product.price}</Card.Text>
                      <Button variant="success">Sepete Ekle</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <div className="col-md-12 alert alert-danger text-center">
              Herhangi bir ürün bulunamadı
            </div>
          )}
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Home);
