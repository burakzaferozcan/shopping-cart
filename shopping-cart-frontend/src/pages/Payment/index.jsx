import React from "react";
import Header from "../../components/common/Header";
import withRouter from "../../withRouter";
import cartWrapper from "../../cartWrapper";
import Notification from "../../RestAPI/Notification";

function Payment({ cart, navigate }) {
  const { totalUniqueItems } = cart;
  if (totalUniqueItems === 0) {
    Notification.error("Sepetinizde ürün bulunamadı!!!");
    navigate("/");
  }
  return (
    <>
      <Header />
      Payment
    </>
  );
}

export default withRouter(cartWrapper(Payment));
