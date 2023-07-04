import Footer from "@/Components/Footer";
import TopNavigation from "@/Components/TopNavigation";

function CustomerLayout({ auth, header, children }) {
    return (
        <>
            <TopNavigation />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default CustomerLayout;
