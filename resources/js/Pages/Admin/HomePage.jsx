import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import AdminLayout from "@/Layouts/AdminLayout";
import { Col, Row } from "react-bootstrap";
import manage from "../../../assets/images/planning.png";
import book from "../../../assets/images/edit.png";
import { FaUserAlt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function HomePage({ auth, users, appointements }) {
    console.log(users);
    const userCount = users.length;
    const appointementCount = appointements.length;
    return (
        <AdminLayout auth={auth}>
            <Col className="m-4   ">
                <Row className="felx justify-center align-middle ">
                    <Col
                        lg={6}
                        md={6}
                        sm={12}
                        className="p-2 width text-center"
                    >
                        <div className="  w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-200 shadow-md overflow-hidden sm:rounded-lg text-center ">
                            <div className="flex justify-center align-middle">
                                <FaUserAlt size="10rem" />
                            </div>
                            <div className="mt-4">{userCount}</div>
                        </div>
                    </Col>
                    <Col
                        lg={6}
                        md={6}
                        sm={12}
                        className="p-2 width text-center"
                    >
                        <div className="  w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-200 shadow-md  overflow-hidden sm:rounded-lg text-center">
                            <div className="flex justify-center align-middle">
                                <FaCalendar size="10rem" />
                            </div>
                            <div className="mt-4">{appointementCount}</div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </AdminLayout>
    );
}

export default HomePage;
