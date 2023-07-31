/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsExclamation } from "react-icons/bs";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
import { useForm } from "@inertiajs/react";

// import { ExclamationIcon } from "@heroicons/react/outline";

export default function AdminModal({ open, setOpen, appointment }) {
    const cancelButtonRef = useRef(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        updateReason: "",
        changedDate: "",
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

        post(route("appointement.update", appointment.booking_date));
        setOpen(() => false);
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-20 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={() => setOpen(false)}
            >
                <div
                    className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block
         sm:p-0"
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div
                            className="inline-block align-middle bg-white rounded-lg
                text-left 
            overflow-hidden shadow-xl 
            transform transition-all 
            sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg leading-6 font-medium text-gray-900"
                                        >
                                            Update Appointement
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <form
                                                onSubmit={submit}
                                                className="flex flex-col space-y-4"
                                            >
                                                <InputLabel>Reason</InputLabel>
                                                <TextInput
                                                    id="updateReason"
                                                    name="updateReason"
                                                    value={data.updateReason}
                                                    className="w-full"
                                                    onChange={handleOnChange}
                                                />
                                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse space-x-3">
                                                    <div className="flex flex-col space-y-3">
                                                        <InputLabel>
                                                            Current Date
                                                        </InputLabel>
                                                        <TextInput
                                                            disabled
                                                            type="date"
                                                            value={
                                                                appointment.booking_date
                                                            }
                                                        />
                                                    </div>
                                                    <div className="flex flex-col space-y-3">
                                                        <InputLabel h>
                                                            Changed Date
                                                        </InputLabel>
                                                        <TextInput
                                                            id="changedDate"
                                                            type="date"
                                                            value={
                                                                data.changedDate
                                                            }
                                                            name="changedDate"
                                                            onChange={
                                                                handleOnChange
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                    <button
                                                        type="submit"
                                                        className="mt-3 w-full inline-flex justify-center
                  rounded-md border border-gray-300 shadow-sm px-4 py-2
                   bg-blue-600 text-base font-medium text-white
                    hover:bg-blue-700 focus:outline-none focus:ring-2
                     focus:ring-offset-2 focus:ring-blue-500 sm:mt-0
                      sm:ml-3 sm:w-auto sm:text-sm"
                                                        onClick={() =>
                                                            setOpen(false)
                                                        }
                                                    >
                                                        Update
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="mt-3 w-full inline-flex justify-center
                  rounded-md border border-gray-300 shadow-sm px-4 py-2
                   bg-white text-base font-medium text-gray-700
                    hover:bg-gray-50 focus:outline-none focus:ring-2
                     focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0
                      sm:ml-3 sm:w-auto sm:text-sm"
                                                        onClick={() =>
                                                            setOpen(false)
                                                        }
                                                        ref={cancelButtonRef}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
