import React from "react";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import { Container } from "semantic-ui-react";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container className="main-container">{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
