import {Component} from "react";
import logo from "../../../images/tour5.jpg"

export class About extends Component {
    render() {
        // @ts-ignore
        return (
            <>

                <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div
                        className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Traveling Fun And Enjoy</span>
                                <span className="block text-indigo-600 xl:inline"> online Booking</span>
                            </h1>
                            <p
                                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                commodo. Elit sunt amet
                                fugiat veniam occaecat fugiat aliqua.
                            </p>

                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a href="#"
                                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                                        Get started
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a href="#"
                                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                        Rooms
                                    </a>
                                </div>
                            </div>

                        </div>


                        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
                            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                                 src={logo}
                                 alt=""/>
                        </div>

                    </div>

                </section>

                <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
                    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                        <div className="p-4 bg-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                                </path>
                            </svg>
                        </div>
                        <div className="px-4 text-gray-700">
                            <h3 className="text-sm tracking-wider">Total Member</h3>
                            <p className="text-3xl">12,768</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                        <div className="p-4 bg-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2">
                                </path>
                            </svg>
                        </div>
                        <div className="px-4 text-gray-700">
                            <h3 className="text-sm tracking-wider">Total Post</h3>
                            <p className="text-3xl">39,265</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                        <div className="p-4 bg-indigo-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z">
                                </path>
                            </svg>
                        </div>
                        <div className="px-4 text-gray-700">
                            <h3 className="text-sm tracking-wider">Total Comment</h3>
                            <p className="text-3xl">142,334</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                        <div className="p-4 bg-red-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4">
                                </path>
                            </svg>
                        </div>
                        <div className="px-4 text-gray-700">
                            <h3 className="text-sm tracking-wider">Server Load</h3>
                            <p className="text-3xl">34.12%</p>
                        </div>
                    </div>
                </div>


                <div className="bg-gray-200 font-sans leading-normal tracking-normal">


                    <section className="bg-white py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-2xl mx-auto text-center">
                                <h1 className="text-4xl font-bold mb-6">We're launching soon</h1>
                                <p className="text-gray-600 mb-12">Enter your email to be the first to know when we
                                    launch.</p>
                                <form className="max-w-md mx-auto">
                                    <div className="flex items-center">
                                        <input type="email"
                                               className="bg-gray-100 mr-3 py-2 px-4 w-full rounded-md focus:outline-none focus:bg-white"
                                               placeholder="Enter your email"/>
                                        <button type="submit"
                                                className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>


                    <section className="bg-gray-200 py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-2xl mx-auto text-center">
                                <h2 className="text-3xl font-bold mb-6">What to expect</h2>
                                <p className="text-gray-600 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Duis nec orci
                                    quis justo aliquam euismod eget a leo. Sed eget orci feugiat, porttitor nibh vel,
                                    faucibus mauris.
                                </p>
                            </div>
                            <div className="flex flex-wrap -mx-4 mt-12">
                                <div className="w-full md:w-1/3 px-4 mb-8">
                                    <div className="rounded-md bg-white shadow-md p-8">
                                        <div className="text-4xl font-bold text-purple-600 mb-4">01</div>
                                        <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
                                        <img src={logo} className="w-screen rounded" alt=""/>
                                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Duis nec
                                            orci quis justo aliquam euismod eget a leo.</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 px-4 mb-8">
                                    <div className="rounded-md bg-white shadow-md p-8">
                                        <div className="text-4xl font-bold text-purple-600 mb-4">01</div>
                                        <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
                                        <img src={logo} className="w-screen rounded" alt=""/>
                                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Duis nec
                                            orci quis justo aliquam euismod eget a leo.</p>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/3 px-4 mb-8">
                                    <div className="rounded-md bg-white shadow-md p-8">
                                        <div className="text-4xl font-bold text-purple-600 mb-4">01</div>
                                        <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
                                        <img src={logo} className="w-screen rounded" alt=""/>
                                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Duis nec
                                            orci quis justo aliquam euismod eget a leo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}