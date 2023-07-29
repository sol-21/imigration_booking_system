//video link https://www.youtube.com/watch?v=YELPZw5ieHQ&t=3657s
import { useEffect, useState } from "react";
import { useRef } from "react";

import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { Link } from "@inertiajs/react";

const SideBar = () => {
    let isTabletMid = useMediaQuery({ query: "(max-width: 500px)" });
    const [open, setOpen] = useState(isTabletMid ? false : true);
    const sidebarRef = useRef();

    useEffect(() => {
        if (isTabletMid) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [isTabletMid]);

    const Nav_animation = isTabletMid
        ? {
              open: {
                  x: 0,
                  width: "16rem",
                  transition: {
                      damping: 40,
                  },
              },
              closed: {
                  x: -250,
                  width: "4rem",
                  transition: {
                      damping: 40,
                      delay: 0.15,
                  },
              },
          }
        : {
              open: {
                  width: "16rem",
                  transition: {
                      damping: 20,
                  },
              },
              closed: {
                  width: "4rem",
                  transition: {
                      damping: 20,
                  },
              },
          };

    return (
        <div>
            <div
                onClick={() => setOpen(false)}
                className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
                    open ? "block" : "hidden"
                } `}
            ></div>
            <motion.div
                ref={sidebarRef}
                variants={Nav_animation}
                initial={{ x: isTabletMid ? -250 : 0 }}
                animate={open ? "open" : "closed"}
                className=" bg-gray-300  text-gray shadow-xl z-[5] max-w-[16rem]  w-[16rem] 
                overflow-hidden md:relative fixed
             h-screen "
            >
                <motion.div
                    onClick={() => {
                        setOpen(!open);
                    }}
                    animate={
                        open
                            ? {
                                  x: 0,
                                  y: 0,
                                  rotate: 0,
                              }
                            : {
                                  x: -10,
                                  y: -200,
                                  rotate: 180,
                              }
                    }
                    transition={{ duration: 0 }}
                    className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
                >
                    <IoIosArrowBack size={25} />
                </motion.div>
                <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
                    <span className="text-2xl text-gray-200 whitespace-pre">
                        ICS{" "}
                    </span>
                </div>

                <div className="flex flex-col  h-full">
                    <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
                        <li>
                            <Link to={"/authentication"} className="link">
                                <BsPerson size={23} className="min-w-max" />
                                Users
                            </Link>
                        </li>

                        <li>
                            <Link
                                href={route("appointement.index")}
                                className="link"
                            >
                                <AiOutlineAppstore
                                    size={23}
                                    className="min-w-max"
                                />
                                Apointments
                            </Link>
                        </li>

                        <li>
                            <Link to={"/stroage"} className="link">
                                <HiOutlineDatabase
                                    size={23}
                                    className="min-w-max"
                                />
                                Info Center
                            </Link>
                        </li>
                        <li>
                            <Link to={route("admin.home")} className="link">
                                <HiOutlineDatabase
                                    size={23}
                                    className="min-w-max"
                                />
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </div>
            </motion.div>
            <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
                <MdMenu size={25} />
            </div>
        </div>
    );
};

export default SideBar;
