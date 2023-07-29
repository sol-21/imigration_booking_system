import CustomerLayout from "@/Layouts/CustomerLayout";
import { Link } from "@inertiajs/react";
import moment from "moment";
import { CgDanger } from "react-icons/cg";

export default function ManageAppointement({ auth, appointment }) {
    return (
        <CustomerLayout auth={auth}>
            {appointment && appointment.length > 0 ? (
                <div className="flex  justify-center  ">
                    <div className="  mt-6   bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <div class="p-4 ">
                            <table class="min-w-full bg-white border border-gray-300">
                                <thead>
                                    <tr>
                                        <th class="py-2 px-4 border-b">id</th>
                                        <th class="py-2 px-4 border-b">
                                            Booking Date
                                        </th>
                                        <th class="py-2 px-4 border-b">Date</th>
                                        <th class="py-2 px-4 border-b">
                                            Reason
                                        </th>
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
                                            <td className="py-2 px-4 border-b ">
                                                <div className="flex justify-content-center items-center">
                                                    <div className="mr-2">
                                                        {moment(
                                                            appointment.booking_date
                                                        ).format("dddd") ===
                                                            "Sunday" && (
                                                            <span
                                                                title="On this Day we may not work please select Other date"
                                                                style={{
                                                                    color: "red",
                                                                }}
                                                            >
                                                                <CgDanger size="1.5rem" />
                                                            </span>
                                                        )}
                                                    </div>
                                                    {moment(
                                                        appointment.booking_date
                                                    ).format("dddd")}
                                                </div>
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                {appointment.reason}
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                <Link
                                                    href={route(
                                                        "appointement.destroy",
                                                        appointment.id
                                                    )}
                                                    className="btn btn-outline-danger"
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="py-2 px-4 border-b">
                                <Link
                                    href={route("appointement.create")}
                                    className="btn btn-outline-success"
                                >
                                    create new
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className=" w-full flex justify-center items-center ">
                    <div className=" w-full text-center  m-6   bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <h1 className="p-2 text-gray-600">
                            No Appointements yet
                        </h1>
                    </div>
                </div>
            )}
        </CustomerLayout>
    );
}
