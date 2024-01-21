import {Component} from "react";
import axios from "axios";

import {Link} from "react-router-dom";
import {RoomAcceptProduct} from "../../common/RoomAcceptProduct/RoomAcceptProduct";



export class CustomerRoomAccept extends Component {
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

 /*   fetchData= async () =>{
        try {
            this.api.get('/customer/getAllCustomerRoom').then((res:{data:any}) =>{
                const jsonData=res.data;
                this.setState({data:jsonData});
            }).catch((error:any) =>{
                console.log("Axios Error",error);
            });
        }catch (error){
            console.log("Data NOT Loard",error);
        }
    }*/
    /*fetchData = async () => {
        try {
            this.api.get('/customer/booking/'+this.api.customerEmail).then((res:{data:any}) =>{
                const jsonData=res.data;
                this.setState({data:jsonData});
            }).catch((error:any) =>{
                console.log("Axios Error",error);
            });
        } catch (error) {
            console.log("Axios Error", error);
            console.log("Data NOT Loaded", error);
        }
    }*/

    fetchData = async () => {

        const signUserDetails = JSON.parse(localStorage.getItem('signUserDetails') || '{}');

        try {
            const customerEmail = signUserDetails.email; // Adjust this based on your data structure
            const response = await this.api.get(`/customer/booking/${customerEmail}`);
            const jsonData = response.data;
            this.setState({ data: jsonData });
        } catch (error) {
            console.log("Axios Error", error);
            console.log("Data NOT Loaded", error);
        }
    }

    render() {
        // @ts-ignore
        const {data}=this.state;

        const signUserDetails = JSON.parse(localStorage.getItem('signUserDetails') || '{}');
        return (
            <>
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
                            {/* <a href="/">
                                <img className="ml-8 rounded-full" src={logo} loading="lazy"
                                     width="42" height="32"/></a>*/}
                        </div>
                        <ul className="hidden items-center justify-center gap-10 md:flex ml-4">
                            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                                <a href="#">
                                    {/* eslint-disable-next-line react/jsx-no-undef */}
                                    <Link to="/customer">Rooms</Link>
                                </a>
                            </li>
                            {/*<li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                                <a href="#">
                                    <Link to="/customer/yourDetails">Your Details</Link>
                                </a>
                            </li>*/}
                            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                                <a href="#">
                                    {/* eslint-disable-next-line react/jsx-no-undef */}
                                    <Link to="/customer/bookCheck">You Book Room</Link>
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

                <div className="flex flex-col items-center justify-center bg-green-400">
                    <h1 className="text-4xl text-white">Booked Rooms</h1>


                </div>
               {/* <div
                    className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mx-auto p-5 sm:p-10 md:p-16">

                    {
                        data.map((product: any) => (
                            <RoomAcceptProduct key={product.id} data={product}/>
                        ))
                    }
                    </div>*/}

                {
                    data.map((product: any) => (
                        <RoomAcceptProduct key={product.id} data={product}/>
                    ))
                }

            </>
        );
    }
}
