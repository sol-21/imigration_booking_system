import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CustomerLayout from "@/Layouts/CustomerLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard(props) {
    return (
        <CustomerLayout>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-gray-100 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
}
