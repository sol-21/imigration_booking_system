import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import loading from "../../assets/images/loading_1.svg";
function Loading() {
    return (
        <Fragment>
            <Container className="text-center">
                <Row>
                    <Col>
                        <img className="loaderAnimation" src={loading} alt="" />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Loading;


