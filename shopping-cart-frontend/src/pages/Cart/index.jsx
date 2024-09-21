import React, { useEffect } from "react";
import Header from "../../components/common/Header";
import withRouter from "../../withRouter";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";
import cartWrapper from "../../cartWrapper";
import { Link } from "react-router-dom";

function Cart({ cart }) {
  const KDV = 20;
  const { items, totalUniqueItems, updateItemQuantity, removeItem, cartTotal } =
    cart;

  return (
    <>
      <Header />
      <Container className="mt-5">
        <h3 className="d-flex justify-content-center mt-5">Sepet</h3>
        <Row className="mt-5">
          <Col md={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Ürün Adı</th>
                  <th>Ürün Adet</th>
                  <th>Ürün Fiyat</th>
                  <th>Ürün Toplam Fiyat</th>
                  <th>Adet İşlem</th>
                  <th>Silme İşlem</th>
                </tr>
              </thead>
              <tbody>
                {totalUniqueItems == 0 ? (
                  <tr>
                    <td colSpan={12}>
                      <div className="col-md-12 alert alert-danger text-center">
                        Herhangi bir ürün bulunamadı
                      </div>
                    </td>
                  </tr>
                ) : (
                  items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity * item.price}</td>
                        <td>
                          <Button
                            variant="success"
                            className="w-100"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </Button>
                          <Button
                            variant="danger"
                            className=" w-100"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </Button>
                        </td>
                        <td>
                          <Button
                            className="w-100"
                            onClick={() => removeItem(item.id)}
                          >
                            Sil
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      {totalUniqueItems !== 0 && (
        <Container>
          <Row className="mt-5">
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    Ara Toplam :{" "}
                    <Badge className="text-white p-2 ml-1 bg-success">
                      {cartTotal}
                    </Badge>
                  </Card.Text>
                  <Card.Text>
                    KDV :{" "}
                    <Badge className="text-white p-2 ml-1 bg-danger">
                      {KDV}%
                    </Badge>
                  </Card.Text>
                  <Card.Text>
                    Toplam Fiyat :{" "}
                    <Badge className="text-white p-2 ml-1 bg-primary">
                      {cartTotal + cartTotal * (KDV / 100)}
                    </Badge>
                  </Card.Text>
                </Card.Body>
                <Button variant="success" as={Link} to="/payment">
                  Ödeme Yap
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default withRouter(cartWrapper(Cart));
