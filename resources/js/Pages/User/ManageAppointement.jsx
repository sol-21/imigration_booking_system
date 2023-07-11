import CustomerLayout from "@/Layouts/CustomerLayout";

export default function ManageAppointement({ auth, appointment }) {
    return (
        <CustomerLayout auth={auth}>
            <div className="d-flex  justify-content-center align-items-center ">
                <div className="  mt-6   bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <div class="p-4">
                        <table class="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th class="py-2 px-4 border-b">id</th>
                                    <th class="py-2 px-4 border-b">
                                        Booking Date
                                    </th>
                                    <th class="py-2 px-4 border-b">Reason</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointment?.map((appointment, index) => (
                                    <tr key={index}>
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
                                            <a
                                                href={route(
                                                    "appointement.destroy"
                                                )}
                                                className="btn btn-outline-danger"
                                            >
                                                Delete
                                            </a>
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            <a
                                                href={route(
                                                    "appointement.create"
                                                )}
                                                className="btn btn-outline-success"
                                            >
                                                create new
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
}
