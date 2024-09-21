import React, { useEffect } from "react";
import Header from "../../components/common/Header";
import withRouter from "../../withRouter";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import cartWrapper from "../../cartWrapper";

function Cart({ cart }) {
  const { items, totalUniqueItems, updateItemQuantity, removeItem } = cart;

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
    </>
  );
}

export default withRouter(cartWrapper(Cart));
