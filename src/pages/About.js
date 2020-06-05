import React from "react";
import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";
import LeftColumn from "../components/LeftColumn";
import { Col, Row, Container } from "../components/Grid";
import "../components/common.css";

function About() {
  return (
    <>
      <HeaderBar />
      <Container fluid="1">
        <Row>
          <Col size="12 md-3" otherClass="p-0">
            <LeftColumn />
          </Col>
          <Col size="12 md-8" otherClass="ml-4 mt-5 pt-5">
            <div className="bio">
              <p>I'm Susan Marshall and I'm a full-stack web developer.</p>
              <p>
                I graduated from Boston University with a Bachelor's Degree in
                Mathematics and Computer Science.  I spent nearly 30 years
                programming and providing technical support for a large
                privately-held software company. I enjoyed making web pages to
                share knowledge across the company's international offices and
                now I focus solely on web design.
              </p>
              <p>
                I see many small businesses that need to get information in the
                hands of their customers, and prospective customers, without
                spending a fortune and being tied into a long-term support
                contract. My goal is to create a site for you that provides key
                information in an easy-to-navigate format that's accessible to
                your customers at any time from any device. More than half of
                today's web access is from mobile devices so your website must
                be easy to use from laptops, tablets, and smartphones!
              </p>
              <p>
                Once your site is created, you should be able to update your
                content without paying for "expert help", I will provide
                training so that you can manage the most common types of updates
                yourself.
              </p>
              <p>
                My web skills include HTML5, JavaScript, CSS, Bootstrap, React,
                JQuery, SQL, MongoDb, and NodeJS.  In addition I am a program leader
                for Kepner-Tregoe problem-solving methodology and have very strong
                skills in writing and public speaking.
              </p>
              <p>
                When I'm not communing with my computer, I hang out with my cats
                (at their whim, not mine), knit (preferably without the cats'
                "help"),  and hike or bike on the many gorgeous Raleigh greenway
                trails and parks. I also like to travel - so far I've visited 65 countries
                and still counting!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default About;
