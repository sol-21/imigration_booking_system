import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import CustomerLayout from "@/Layouts/CustomerLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Col } from "react-bootstrap";

function ContsctUs({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
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

        post(route("contact.store"));
    };

    return (
        <CustomerLayout auth={auth}>
            <div className="d-flex justify-content-center align-items-center">
                <div className=" w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <div className="text-center">
                        <p className="font-weight-bold text-3xl mt-1 block w-full">
                            Please Contact Us
                        </p>
                    </div>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={handleOnChange}
                                required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={handleOnChange}
                                required
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="phone" value="Phone" />

                            <TextInput
                                id="phone"
                                type="text"
                                name="phone"
                                value={data.phone}
                                className="mt-1 block w-full"
                                autoComplete="phone"
                                onChange={handleOnChange}
                                required
                            />

                            <InputError
                                message={errors.phone}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="message" value="message" />

                            <textarea
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full "
                                id="message"
                                type="text"
                                name="message"
                                value={data.message}
                                autoComplete="new-message"
                                onChange={handleOnChange}
                                required
                                placeholder="write your message here"
                            />

                            <InputError
                                message={errors.message}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton
                                className="ml-4"
                                disabled={processing}
                            >
                                Send
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </CustomerLayout>
    );
}

export default ContsctUs;
