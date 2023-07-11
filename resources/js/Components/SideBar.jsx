import { useState } from "react";
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    sidebarClasses,
} from "react-pro-sidebar";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBar() {
    return (
        <>
            <Sidebar
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        backgroundColor: "black-70",
                        color: "blue",
                        height: "100vh",
                    },
                }}
                breakPoint="sm"
            >
                <Menu>
                    <SubMenu label="appointment">
                        <MenuItem> all apointments </MenuItem>
                        <MenuItem>manage apointments</MenuItem>
                    </SubMenu>
                    <MenuItem>manage user</MenuItem>
                    <MenuItem> landing info </MenuItem>
                </Menu>
            </Sidebar>
        </>
    );
}

export default SideBar;
