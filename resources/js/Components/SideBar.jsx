import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SideBar() {

    return (
        <>
            <Sidebar rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    backgroundColor: "black",
                    
                    height: "100vh"
                },
            }} breakPoint='sm' >
                <Menu>
                    <SubMenu label="appointment">
                        <MenuItem > all apointments </MenuItem>
                        <MenuItem icon={<FontAwesomeIcon size="2x" />}> manage apointments  </MenuItem>

                    </SubMenu>
                    <MenuItem icon={<FontAwesomeIcon icon={faPhone} size="1x" />}> user </MenuItem>
                    <MenuItem> landing info </MenuItem>
                </Menu>
            </Sidebar>
        </>
    );
}

export default SideBar;