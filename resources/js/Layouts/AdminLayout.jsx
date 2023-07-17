import TopNavAdmin from "@/Components/TopNavAdmin";
import SideBar from "@/Components/SideBar";

function AdminLayout({ auth, Header, children }) {
    return (
        <div className="min-h-screen ">
            <TopNavAdmin auth={auth} />
            <main>{children}</main>
            <SideBar />
        </div>
    );
}

export default AdminLayout;
