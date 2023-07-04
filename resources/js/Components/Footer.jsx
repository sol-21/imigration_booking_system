import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import {
    faFacebook,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="pb-3">
            <Container fluid={true} className="footerSection">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center">
                        <h2 className="footerName text-center">Follow As</h2>
                        <div className="social-container">
                            <a href="" className=" facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>

                            <a href="" className=" youtube social">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            </a>

                            <a href="" className=" twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </div>
                    </Col>

                    <Col lg={4} md={6} sm={12} className="text-center">
                        <h2 className="footerName ">Contact us</h2>

                        <div className="d-flex justify-center">
                            <a href="" className=" p-3 twitter social">
                                <FontAwesomeIcon icon={faPhone} size="1x" />
                            </a>
                            <p className="footerDescription">0582263730</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="text-center">
                        <h2 className="footerName text-center ">Information</h2>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
