import React from "react";
import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";
import LeftColumn from "../components/LeftColumn";
import Gallery from "../components/Gallery";
import { Col, Row, Container } from "../components/Grid";
import "../components/common.css";
import projects from "../projects.json";

function Portfolio() {
  return (
    <>
      <HeaderBar />
      <Container fluid="1">
        <Row>
          <Col size="12 md-3" otherClass="p-0">
            <LeftColumn />
          </Col>
          <Col size="12 md-9">
            <Gallery projects={projects} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Portfolio;
