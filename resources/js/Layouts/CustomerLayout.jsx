import Footer from "@/Components/Footer";
import TopNavigation from "@/Components/TopNavigation";

function CustomerLayout({ auth, header, children }) {
    return (
        <>
            <TopNavigation auth={auth} />
            <main className=" bg-gray-100  min-h-screen ">{children}</main>
            <Footer />
        </>
    );
}

export default CustomerLayout;
