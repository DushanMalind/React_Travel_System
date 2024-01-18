import {Component} from "react";

import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {CustomerProduct} from "../../common/CustomerProduct/CustomerProduct";
import {Link, Route, Routes} from "react-router-dom";
import {CustomerMainContent} from "../../common/CustomerMainContent/CustomerMainContent";
import logo from "../../../images/tour2.jpg";


export class Customer extends Component {
    private api:any;

    constructor(props:{} | Readonly<{}>) {
        super(props);
        this.api=axios.create({baseURL:`http://localhost:4000`})
        this.state={
            data:[],
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData= async () =>{
        try {
            this.api.get('/product/all').then((res:{data:any}) =>{
                const jsonData=res.data;
                this.setState({data:jsonData});
            }).catch((error:any) =>{
                console.log("Axios Error",error);
            });
        }catch (error){
            console.log("Data NOT Loard",error);
        }
    }

    render() {
        // @ts-ignore
        const {data}=this.state;
        const signUserDetails = JSON.parse(localStorage.getItem('signUserDetails') || '{}');
        return (

            <>
                {/*   <header
                    className=" inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
                    <div className="px-4">
                        <div className="flex items-center justify-between">
                            <div className="flex shrink-0">
                                 <div className="flex items-center ">
                                    <img
                                        src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                                        className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-green-400"
                                        alt=""/>
                                    <p className="font-semibold text-sm">{signUserDetails.firstName + " " + signUserDetails.lastName}</p>
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
                            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                                <a aria-current="page"
                                   className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                   href="#">
                                    <Link to={'/yourDetails'}></Link>Your Details</a>
                                <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                   href="#">Your Order Check</a>
                            </div>
                            <div className="flex items-center justify-end gap-3">
                                 <a className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                                   href="/login">Sign in</a>
                                <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                   href="/login">Log Out</a>
                            </div>
                        </div>
                    </div>
                </header>*/}

                <header className="sticky bg-blue-400 inset-0 z-50 border-b border-slate-100  backdrop-blur-lg rounded">
                    <nav
                        className="mx-auto flex max-w-8xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-4 py-4">
                        <div className="relative flex items-center ml">
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
                            <a href="/">
                                <img className="ml-8 rounded-full" src={logo} loading="lazy"
                                     width="42" height="32"/></a>
                        </div>
                        <ul className="hidden items-center justify-center gap-10 md:flex ml-4">
                            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                                <a href="#">
                                    {/* eslint-disable-next-line react/jsx-no-undef */}
                                    <Link to="/customer">Rooms</Link>
                                </a>
                            </li>
                            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                                <a href="#">
                                    <Link to="/customer/yourDetails">Your Details</Link>
                                </a>
                            </li>
                        </ul>
                        <div className="flex-grow"></div>
                        <div className="hidden items-center justify-center gap-6 md:flex mr-8">
                            <a href="#"
                               className="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 font-dm
                               text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200
                               ease-in-out hover:scale-[1.03]">
                                <Link to="/sign">Log Out</Link>
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


                <main className="flex-grow">
                    <div
                        className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mx-auto p-5 sm:p-10 md:p-16">

                        {
                            data.map((product: any) => (
                                <CustomerProduct key={product.id} data={product}/>
                            ))
                        }
                    </div>

                   {/* <Routes>
                        <Route path="/*" Component={CustomerMainContent}></Route>
                    </Routes>*/}
                </main>




            </>
        );
    }
}
