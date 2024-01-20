import {Component} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {AdminMainContent} from "../../common/AdminMainContent/AdminMainContent";
import {AdminProduct} from "../adminProduct/AdminProduct";
import {AdminHome} from "../adminHome/AdminHome";
import axios from "axios";

export class Admin extends Component {
    render() {
        const signUserDetails = JSON.parse(localStorage.getItem('signUserDetails') || '{}');
        return (
            <>
                <div>
                    <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
                    <div className="bg-white">
                        <div className="flex-col flex">
                            <div className="w-full border-b-2 border-gray-200">
                                <div className="bg-white h-16 justify-between items-center mx-auto px-4 flex">
                                    <div>
                                        <img
                                            src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png"
                                            className="block btn- h-8 w-auto" alt=""/>
                                    </div>
                                    <div className="lg:block mr-auto ml-40 hidden relative max-w-xs">
                                        <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
                  <span className="justify-center items-center flex">
                    <span className="justify-center items-center flex">
                      <span className="items-center justify-center flex">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0
                      11-14 0 7 7 0 0114 0z"/></svg>
                      </span>
                    </span>
                  </span>
                                        </p>
                                        <input placeholder="Type to search" type="search" className="border border-gray-300 focus:ring-indigo-600
              focus:border-indigo-600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2"/>
                                    </div>
                                    <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
                                        <div className="relative">
                                            <p className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                    <span className="items-center justify-center flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem"
                           viewBox="0 0 456.147 456.147"
                      ><g><path
                          d="M445.666,4.445c-4.504-4.858-11.756-5.954-17.211-2.19L12.694,290.14c-3.769,2.609-5.878,7.012-5.555,11.586 c0.323,4.574,3.041,8.635,7.139,10.686l95.208,47.607l37.042,86.43c1.78,4.156,5.593,7.082,10.064,7.727 c0.621,0.091,1.242,0.136,1.856,0.136c3.833,0,7.506-1.697,9.989-4.701l38.91-46.994l107.587,52.227 c1.786,0.867,3.725,1.306,5.663,1.306c1.836,0,3.674-0.393,5.384-1.171c3.521-1.604,6.138-4.694,7.146-8.432L448.37,18.128 C449.314,14.629,449.878,8.988,445.666,4.445z M343.154,92.883L116.681,334.604l-71.208-35.603L343.154,92.883z M162.003,416.703 l-27.206-63.48L359.23,113.665L197.278,374.771c-0.836,0.612-1.634,1.305-2.331,2.146L162.003,416.703z M312.148,424.651 l-88.604-43.014L400.427,96.462L312.148,424.651z"/></g></svg>
                    </span>
                                            </p>
                                        </div>
                                        <div className="relative">
                                            <p className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                    <span className="justify-center items-center flex">
                      <span className="justify-center items-center flex">
                        <span className="items-center justify-center flex">
                          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                               stroke="currentColor" stroke-width="2"><path stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4
                        0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6
                        0H9"/></svg>
                        </span>
                      </span>
                    </span>
                                            </p>
                                            <p className="px-1.5 py-0.5 font-semibold text-xs items-center bg-indigo-600 text-white rounded-full inline-flex
                absolute -top-px -right-1">2</p>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="relative">
                                                <img
                                                    src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                                                    className="object-cover btn- h-9 w-9 rounded-full mr-2"
                                                    alt=""
                                                />
                                                <div
                                                    className="absolute bottom-0 right-1 h-3 w-3 bg-green-400 rounded-full"></div>
                                            </div>
                                            <p className="font-semibold text-sm">{signUserDetails.firstName + " " + signUserDetails.lastName}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex overflow-y-hidden">
                    <div className="flex flex-col h-screen p-3 bg-gray-800 shadow w-60">
                        <div className="space-y-3">
                            <div className="flex items-center">


                                <h2 className="text-xl font-bold text-white">Dashboard</h2>
                            </div>
                            <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button
                                type="submit"
                                className="p-2 focus:outline-none focus:ring"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </span>
                                <input
                                    type="search"
                                    name="Search"
                                    placeholder="Search..."
                                    className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                                />
                            </div>
                            <div className="flex-1">
                                <ul className="pt-2 pb-4 space-y-5 text-sm">
                                    <li className="rounded-sm">
                                        <a
                                            href="#"
                                            className="flex items-center p-2 space-x-3 rounded-md"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-gray-100"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                />
                                            </svg>
                                            <span className="text-gray-100">
                                                <Link to={'/admin'}>Home</Link>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="rounded-sm">
                                        <a
                                            href="#"
                                            className="flex items-center p-2 space-x-3 rounded-md"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-gray-100"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                                />
                                            </svg>
                                            <span className="text-gray-100">
                                                <Link to={"/admin/addRoom"}>Room Add</Link>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="rounded-sm">
                                        <a
                                            href="#"
                                            className="flex items-center p-2 space-x-3 rounded-md"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-gray-100"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                                />
                                            </svg>
                                            <span className="text-gray-100">
                                                <Link to={"/admin/byRoom"}>By Room</Link>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="rounded-sm">
                                        <a
                                            href="#"
                                            className="flex items-center p-2 space-x-3 rounded-md"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-gray-100"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            <span className="text-gray-100">
                                                <Link to={'admin/payment'}>Payment</Link>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="rounded-sm">
                                        <a
                                            href="#"
                                            className="flex items-center p-2 space-x-3 rounded-md"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-gray-100"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                                />
                                            </svg>
                                            <span className="text-gray-100">
                                                <Link to={'/home'}>Logout</Link>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <Routes>
                        <Route path="/*" Component={AdminMainContent}></Route>
                    </Routes>

                </div>


            </>
        );
    }
}
