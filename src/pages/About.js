import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <HeaderBar />
      <div className="container">
        <Row>
          <Col>
            <div className="bio">
              <p>I'm Susan Marshall and I'm a full-stack web developer.</p>
              <p>
                I graduated from Boston University with a Bachelor's Degree in
                Mathematics and computer Science, and spent nearly 30 years
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
                your customers at any time. More than half of today's web access
                is from mobile devices so your website must be easy to use from
                laptops, tablets, and smartphones!
              </p>
              <p>
                Once your site is created, you should be able to update your
                content without needing "expert help", I will provide training
                so that you can manage the most common types of updates
                yourself.
              </p>
              <p>
                When I'm not communing with my computer, I hang out with my cats
                (at their whim, not mine), knit (preferably without the cats'
                "help"), hike, and bike on the many gorgeous Raleigh greenway
                trails. I also like to travel - so far I've visited 65 countries
                and still counting!
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}
