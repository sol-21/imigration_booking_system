import { Col, Row } from "react-bootstrap";
import manage from "../../../assets/images/planning.png";
import book from "../../../assets/images/edit.png";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import CustomerLayout from "@/Layouts/CustomerLayout";

function HomePage({ auth }) {
    return (
        <>
            <CustomerLayout auth={auth}>
                <Col className="m-4   ">
                    <Row className="d-felx justify-center align-items-center ">
                        <Col
                            lg={6}
                            md={6}
                            sm={12}
                            className="p-2 width text-center"
                        >
                            <div className="  w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-200 shadow-md overflow-hidden sm:rounded-lg text-center">
                                <div className="text-center">
                                    <img
                                        style={{
                                            height: 165,
                                            width: 165,
                                        }}
                                        className=""
                                        src={book}
                                        alt=""
                                    />
                                </div>
                                <div className="mt-4">
                                    <ResponsiveNavLink
                                        href={route("appointement.create")}
                                        className="btn btn-outline-primary"
                                    >
                                        Book appointement
                                    </ResponsiveNavLink>
                                </div>
                            </div>
                        </Col>
                        <Col
                            lg={6}
                            md={6}
                            sm={12}
                            className="p-2 width text-center"
                        >
                            <div className="  w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-200 shadow-md  overflow-hidden sm:rounded-lg text-center">
                                <div className="text-center">
                                    <img
                                        style={{
                                            height: 165,
                                            width: 165,
                                        }}
                                        className=""
                                        src={manage}
                                        alt=""
                                    />
                                </div>
                                <div className="mt-4">
                                    <ResponsiveNavLink
                                        href={route("appointement.show")}
                                        className="btn btn-outline-primary"
                                    >
                                        manage appointement
                                    </ResponsiveNavLink>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </CustomerLayout>
        </>
    );
}

export default HomePage;
