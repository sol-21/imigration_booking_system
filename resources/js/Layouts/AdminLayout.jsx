import {
    Menu,
    MenuItem,
    Sidebar,
    SubMenu,
    sidebarClasses,
} from "react-pro-sidebar";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopNavAdmin from "@/Components/TopNavAdmin";
import SideBar from "@/Components/SideBar";

function AdminLayout({ auth, Children }) {
    return (
        <div className="min-h-screen ">
            <TopNavAdmin auth={auth} />
            <main>{Children}</main>
            <SideBar />
        </div>
    );
}

export default AdminLayout;
