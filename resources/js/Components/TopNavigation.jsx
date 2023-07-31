import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import ApplicationLogo from "./ApplicationLogo";
import Dropdown from "./Dropdown";
import { Link } from "@inertiajs/react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { UseNotificationStore } from "../store/store";
import { IoIosNotifications } from "react-icons/io";

function TopNavigation({ auth }) {
    const isSeen = UseNotificationStore((state) => state.isSeen);
    const data = UseNotificationStore((state) => state.notificationData);
    const changeSeen = UseNotificationStore((state) => state.changeSeen);
    const setData = UseNotificationStore((state) => state.setData);

    const handleNotification = () => {
        if (data) {
            changeSeen();
        }
    };

    const handleCloseNotification = () => {
        setData();
        changeSeen();
    };

    useEffect(() => {
        window.Echo.private("user." + auth.user.id).listen("Hello", (e) => {
            if (e) {
                setData(e);
            }
        });
    }, [auth.user.id]);

    return (
        <Navbar
            expand="sm"
            data-bs-theme="dark"
            className="shadow-md bg-gray-600"
        >
            <Container>
                <Navbar.Brand>
                    <Link href={route("user.home")}>
                        <ApplicationLogo className="navbarlogo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav relative">
                    <Nav className="me-auto"></Nav>
                    <Nav className=" flex gap-3">
                        <Link
                            className="social  border-white p-2 rounded-md no-underline text-gray-300 hover:bg-slate-800  transition-all"
                            href={route("user.home")}
                        >
                            Home
                        </Link>

                        <Link
                            className="social no-underline border-white p-2 rounded-md text-gray-300 hover:bg-slate-800 "
                            href={route("about")}
                        >
                            About
                        </Link>

                        <Link
                            className="social no-underline border-white p-2 rounded-md text-gray-300 hover:bg-slate-800 "
                            href={route("contact")}
                        >
                            Contact Us
                        </Link>
                        <div className="relative">
                            <button
                                onClick={handleNotification}
                                className="social no-underline border-white p-2 rounded-md  hover:bg-slate-800 "
                            >
                                <IoIosNotifications
                                    size="30px"
                                    className="text-gray-300"
                                />
                            </button>
                            {data !== undefined && (
                                <div className="bg-red-500 h-3 w-3 bottom-6 right-3 absolute rounded-lg"></div>
                            )}
                        </div>

                        {/* notification board */}
                        {isSeen ? (
                            <div className=" bg-gray-100 shadow-lg absolute lg:right-12 lg:top-20 md:right-14 md:top-20 sm:top-24 sm:right-10 w-64 h-26 rounded-md flex justify-center items-center p-2">
                                <span className="text-red-500">
                                    {data?.notification}
                                </span>
                                <span
                                    onClick={handleCloseNotification}
                                    className="hover:cursor-pointer"
                                >
                                    <AiOutlineClose />
                                </span>
                            </div>
                        ) : null}

                        <div className="ml-3 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {auth.user.name}

                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route("profile.edit")}>
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavigation;
