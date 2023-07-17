import AdminModal from "@/Components/AdminModal";
import AdminLayout from "@/Layouts/AdminLayout";
import { useState } from "react";

export default function ManageAppointement({ auth, appointment }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <AdminModal open={open} setOpen={setOpen} />
            <AdminLayout auth={auth}>
                <div className="d-flex  justify-content-center align-items-center ">
                    <div className="  mt-6   bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <div className="p-4">
                            <table className="min-w-full bg-white border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b">
                                            id
                                        </th>
                                        <th className="py-2 px-4 border-b">
                                            Booking Date
                                        </th>
                                        <th className="py-2 px-4 border-b">
                                            Reason
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointment?.map((appointment) => (
                                        <tr key={appointment.id}>
                                            <td className="py-2 px-4 border-b">
                                                {appointment.id}
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                {appointment.booking_date}
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                {appointment.reason}
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                <button
                                                    className="btn btn-outline-primary"
                                                    onClick={() =>
                                                        setOpen(true)
                                                    }
                                                >
                                                    Update
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
