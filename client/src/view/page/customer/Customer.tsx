import {Component} from "react";

import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {CustomerProduct} from "../../common/CustomerProduct/CustomerProduct";


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
                <header
                    className=" inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
                    <div className="px-4">
                        <div className="flex items-center justify-between">
                            <div className="flex shrink-0">
                                {/* <div className="flex items-center ">
                                    <img
                                        src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                                        className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-green-400"
                                        alt=""/>
                                    <p className="font-semibold text-sm">{signUserDetails.firstName + " " + signUserDetails.lastName}</p>
                                </div>*/}
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
                                   href="#">How it works</a>
                                <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                   href="#">Pricing</a>
                            </div>
                            <div className="flex items-center justify-end gap-3">
                                {/* <a className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                                   href="/login">Sign in</a>*/}
                                <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                   href="/login">Log Out</a>
                            </div>
                        </div>
                    </div>
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


                </main>


            </>
        );
    }
}
