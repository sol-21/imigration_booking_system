import Footer from "@/Components/Footer";
import TopNavigation from "@/Components/TopNavigation";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CustomerLayout({ auth, children }) {
    const { flash } = usePage().props;
    useEffect(() => {
        if (flash.message) {
            toast(flash.message);
        }

        if (flash.success) {
            toast.success(flash.success);
        }

        if (flash.alert) {
            toast.error(flash.alert);
        }
    }, [flash]);

    return (
        <>
            <TopNavigation auth={auth} />
            <ToastContainer />
            <main className=" bg-gray-100  min-h-screen ">{children}</main>
            <Footer />
        </>
    );
}

export default CustomerLayout;
