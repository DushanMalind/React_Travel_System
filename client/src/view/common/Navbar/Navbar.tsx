import {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../../../images/tour2.jpg"


export class Navbar extends Component {
    render() {
        return (
            <>
                {/*bg-white/80*/}
                <header className="sticky bg-blue-400 inset-0 z-50 border-b border-slate-100  backdrop-blur-lg rounded">
                    <nav
                        className="mx-auto flex max-w-8xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-4 py-4">
                        <div className="relative flex items-center ml">
                            <h1 className="text-[15px] ml-2 font-bold">Travel System</h1>
                            <a href="/">
                                <img className="ml-8 rounded-full" src={logo} loading="lazy"
                                       width="42" height="32"/></a>
                        </div>
                        <ul className="hidden items-center justify-center gap-10 md:flex ml-4">
                            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                                <a href="#">
                                    {/* eslint-disable-next-line react/jsx-no-undef */}
                                    <Link to="/home">Home</Link>
                                </a>
                            </li>
                            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                                <a href="#">
                                    <Link to="/about">About</Link>
                                </a>
                            </li>
                            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                                <a href="#">
                                    <Link to="/room">Rooms</Link>
                                </a>
                            </li>
                            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                                <a href="#">
                                    <Link to="/contact">Contact</Link>
                                </a>
                            </li>
                        </ul>
                        <div className="flex-grow"></div>
                        <div className="hidden items-center justify-center gap-6 md:flex mr-8">
                        <a href="#" className="rounded-md bg-gradient-to-br bg-green-400 to-emerald-400 px-3 py-1.5 font-dm
                               text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200
                               ease-in-out hover:scale-[1.03]">Login In</a>
                            <a href="#"
                               className="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 font-dm
                               text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200
                               ease-in-out hover:scale-[1.03]">Sign in
                            </a>
                        </div>
                        <div className="relative flex items-center justify-center md:hidden ">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                     className="h-6 w-auto text-slate-900">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </header>
            </>
        );
    }
}