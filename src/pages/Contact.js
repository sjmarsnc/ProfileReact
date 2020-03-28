import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "../components/Card";
import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";
import LeftColumn from "../components/LeftColumn";
import { Col, Row, Container } from "../components/Grid";
import "../components/common.css";

function Contact() {
  return (
    <>
      <HeaderBar />
      <Container fluid="1">
        <Row>
          <Col size="12 md-3" otherClass="p-0">
            <LeftColumn />
          </Col>
          <Col size="12 md-9">
            <h1> Contact stuff goes here</h1>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
