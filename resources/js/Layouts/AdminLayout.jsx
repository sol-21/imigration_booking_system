import TopNavAdmin from "@/Components/TopNavAdmin";
import SideBar from "@/Components/SideBar";

function AdminLayout({ auth, children }) {
    return (
        <div className=" ">
            <TopNavAdmin auth={auth} />
            <div className="flex">
                <SideBar />
                <main className="m-2 flex justify-center align-middle">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;
