import React, { useState } from "react";
import Header from "../../components/common/Header";
import withRouter from "../../withRouter";
import cartWrapper from "../../cartWrapper";
import Notification from "../../RestAPI/Notification";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import { Spinner } from "react-bootstrap";
import parse from "html-react-parser";

function Payment({ cart, navigate }) {
  const { totalUniqueItems, items, cartTotal } = cart;
  const [isLoading, setIsLoading] = useState(true);
  const [paymentForm, setPaymentForm] = useState("");

  const getPaymentForm = () => {
    RestClient.postRequest(AppUrl.payment, {
      basket: items,
      totalPrice: cartTotal,
    })
      .then((res) => {
        const status = res.status;
        const result = res.data;

        if (status === 200) {
          setPaymentForm(result);
          setIsLoading(false);
        } else {
          Notification.error("Ödeme formu alınırken bir hata oluştu!");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        Notification.error("Bir Hata Oluştu!");
      });
  };

  if (totalUniqueItems === 0) {
    Notification.error("Sepetinizde ürün bulunamadı!");
    navigate("/");
  } else {
    getPaymentForm();
  }
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
      {paymentForm !== "" ? (
        parse(paymentForm)
      ) : (
        <div className="d-flex justify-content-center align-align-content-center vh-100">
          Ödeme formu getirilemedi
        </div>
      )}
    </>
  );
}

export default withRouter(cartWrapper(Payment));
