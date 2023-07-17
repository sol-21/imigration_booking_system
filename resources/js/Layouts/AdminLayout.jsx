import TopNavAdmin from "@/Components/TopNavAdmin";
import SideBar from "@/Components/SideBar";

function AdminLayout({ auth, Children }) {
    return (
        <div className=" ">
            <TopNavAdmin auth={auth} />
            <main>{Children}</main>
            <SideBar />
        </div>
    );
}

export default AdminLayout;
