import GuestLayout from "@/Layouts/GuestLayout";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import CustomerLayout from "@/Layouts/CustomerLayout";
import InputError from "@/Components/InputError";
import { useEffect } from "react";
import { router } from "@inertiajs/react";
import Pusher from "pusher-js";

export default function CreateAppointement({ auth }) {
    // useEffect(() => {
    //     Window.Pusher = Pusher;
    //     Pusher.logToConsole = true;

    //     const pusher = new Pusher("d58006d4e26a3792d26a", {
    //         cluster: "ap2",
    //     });

    //     const channel = pusher.subscribe("chat");
    //     channel.bind("message", function (data) {
    //         console.log("message:", data);
    //     });
    // });
    const { data, setData, post, processing, errors, reset } = useForm({
        reason: "",
        datetimes: "",
    });
    const today = new Date().toISOString().split("T")[0];
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const nextWeekDate = nextWeek.toISOString().split("T")[0];

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("appointement.store"));
    };
    return (
        <CustomerLayout auth={auth}>
            <div className="d-flex  justify-content-center align-items-center ">
                <div className=" w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <div className="text-center">
                        <p className="text-3xl text-gray-500">Fill The Form</p>
                    </div>
                    <form onSubmit={submit}>
                        <div className="mt-4">
                            <InputLabel
                                htmlFor="reson"
                                value="Reason For The Appointment"
                            />
                            <select
                                name="reason"
                                id="types"
                                className="w-96 mt-1 block border border-gray-300 rounded-lg text-gray-900"
                                onChange={handleOnChange}
                            >
                                <option value="" disabled selected>
                                    Select an option
                                </option>
                                <option value="New">New Passport</option>
                                <option value="Renew">Renew passport</option>
                                <option value="Citiznship">Citiznship</option>
                                <option value="Citiznship">Origin Id</option>
                                <option value="other">Other</option>
                            </select>
                            <InputError
                                message={errors.reason}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="date" value="Select Date" />
                            <TextInput
                                id="date"
                                type="date"
                                min={today}
                                max={nextWeekDate}
                                name="datetime"
                                onChange={handleOnChange}
                                className="w-96 mt-1 block text-gray-900"
                            />
                            <InputError
                                message={errors.datetime}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton type="submit">
                                Submit Appointment
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </CustomerLayout>
    );
}
