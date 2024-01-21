import {Component} from "react";
import {ToastContainer} from "react-toastify";
import axios from "axios";

export class Payment extends Component {
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
        return (
            <>

                <div className="px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto overflow-y-scroll">
                    <div className="flex justify-start item-start space-y-2 flex-col">
                        <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Payment
                            Details</h1>

                    </div>


                    <div id="product-modal" className="container p-6 space-y-6 ">
                        <form action="#">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="customerEmail"
                                           className="text-sm font-medium text-gray-900 block mb-2">
                                        Customer Email
                                    </label>
                                    <select
                                        name="customerEmail"
                                        id="customerEmail"

                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                                        rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">

                                    </select>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="product-name"
                                           className="text-sm font-medium text-gray-900 block mb-2">Customer
                                        Name</label>
                                    <input type="text" name="customerName" id="customerName"

                                           readOnly={true}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Text"/>
                                </div>


                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="brand"
                                           className="text-sm font-medium text-gray-900 block mb-2">Customer
                                        Phone</label>
                                    <input type="text" name="customerPhone" id="customerPhone"

                                           readOnly={true}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Text"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="brand"
                                           className="text-sm font-medium text-gray-900 block mb-2">Customer
                                        Address</label>
                                    <input type="text" name="customerAddress" id="customerAddress"

                                           readOnly={true}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Text"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="price"
                                           className="text-sm font-medium text-gray-900 block mb-2">Room Title</label>
                                    <input type="number" name="roomTitle" id="roomTitle"

                                           readOnly={true}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="2300"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="category"
                                           className="text-sm font-medium text-gray-900 block mb-2">Customer
                                        PaymentDate</label>
                                    <input type="text" name="customerPaymentDate" id="customerPaymentDate"

                                           readOnly={true}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Title"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="category"
                                           className="text-sm font-medium text-gray-900 block mb-2">BookingDateTime</label>
                                    <input type="text" name="bookingDateTime" id="bookingDateTime"

                                           readOnly={true}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Title"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="category"
                                           className="text-sm font-medium text-gray-900 block mb-2">Customer
                                        RoomType</label>
                                    <input type="text" name="customerRoomType" id="customerRoomType"

                                           readOnly={true}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Title"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="category"
                                           className="text-sm font-medium text-emerald-500 block mb-2">Customer
                                        TotalPrice</label>
                                    <input type="text" name="customerTotalPrice" id="customerTotalPrice"


                                           className="shadow-sm bg-gray-50 border border-green-500 text-red-600 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Title"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="category"
                                           className="text-sm font-medium text-gray-900 block mb-2">Date And
                                        Time</label>
                                    <input type="text" name="bookingDateTime" id="bookingDateTime"

                                           readOnly={true}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Title"/>
                                </div>


                            </div>
                        </form>

                        <div className="p-6 border-t space-x-3 border-gray-200 rounded-b">
                            {/* <button
                                className="text-white bg-emerald-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button">Save all
                                <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="light"
                                />
                            </button>*/}

                            <button
                                className="text-white bg-yellow-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button" >Save
                                <ToastContainer/>
                            </button>

                            <button
                                className="text-white bg-purple-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button" >Clear
                                <ToastContainer/>
                            </button>


                        </div>

                    </div>


                    <div
                        className=" flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0 hidden">
                        <div
                            className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                            <div
                                className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Payment
                                    Cart</p>
                                <div
                                    className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                    <div className="pb-4 md:pb-8 w-full md:w-40">
                                        <img className="w-full hidden md:block"
                                             src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress"/>
                                        <img className="w-full md:hidden"
                                             src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress"/>
                                    </div>
                                    <div
                                        className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">Premium
                                                Quaility Dress</h3>
                                            <div className="flex justify-start items-start flex-col space-y-2">
                                                <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                    className="dark:text-gray-400 text-gray-300">Style: </span> Italic
                                                    Minimal Design</p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                    className="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                    className="dark:text-gray-400 text-gray-300">Color: </span> Light
                                                    Blue</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            <p className="text-base dark:text-white xl:text-lg leading-6">$36.00 <span
                                                className="text-red-300 line-through"> $45.00</span></p>
                                            <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
                                            <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  <div
                                    className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                                    <div className="w-full md:w-40">
                                        <img className="w-full hidden md:block"
                                             src="https://i.ibb.co/s6snNx0/Rectangle-17.png" alt="dress"/>
                                        <img className="w-full md:hidden"
                                             src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png" alt="dress"/>
                                    </div>
                                    <div
                                        className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">High
                                                Quaility Italic Dress</h3>
                                            <div className="flex justify-start items-start flex-col space-y-2">
                                                <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                    className="dark:text-gray-400 text-gray-300">Style: </span> Italic
                                                    Minimal Design</p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                    className="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                    className="dark:text-gray-400 text-gray-300">Color: </span> Light
                                                    Blue</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            <p className="text-base dark:text-white xl:text-lg leading-6">$20.00 <span
                                                className="text-red-300 line-through"> $30.00</span></p>
                                            <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
                                            <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">$20.00</p>
                                        </div>
                                    </div>
                                </div>*/}
                            </div>
                            <div
                                className="flex justify-center  md:flex-row   items-stretch w-full space-y-2 md:space-y-0 md:space-x-6 xl:space-x-4">
                                <div
                                    className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                                    <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                                    <div
                                        className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                        <div className="flex justify-between w-full">
                                            <p className="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">$56.00</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base dark:text-white leading-4 text-gray-800">Discount <span
                                                className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span>
                                            </p>
                                            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">-$28.00
                                                (50%)</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                                            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">$8.00</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                        <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">$36.00</p>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                                    <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
                                    <div className="flex justify-between items-start w-full">
                                        <div className="flex justify-center items-center space-x-4">
                                            <div className="w-8 h-8">
                                                <img className="w-full h-full" alt="logo"
                                                     src="https://i.ibb.co/L8KSdNQ/image-3.png"/>
                                            </div>
                                            <div className="flex flex-col justify-start items-center">
                                                <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">DPD
                                                    Delivery<br/><span
                                                        className="font-normal">Delivery with 24 Hours</span></p>
                                            </div>
                                        </div>
                                        <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">$8.00</p>
                                    </div>
                                    <div className="w-full flex justify-center items-center">
                                        <button
                                            className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100
                                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full
                                            bg-gray-800 text-base font-medium leading-4 text-white">Pay Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
                            <div
                                className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                                <div className="flex flex-col justify-start items-start flex-shrink-0">
                                    <div
                                        className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                        <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar"/>
                                        <div className="flex justify-start items-start flex-col space-y-2">
                                            <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">David
                                                Kent</p>
                                            <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">10
                                                Previous Orders</p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                        <img className="dark:hidden"
                                             src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg"
                                             alt="email"/>
                                        <img className="hidden dark:block"
                                             src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg"
                                             alt="email"/>
                                        <p className="cursor-pointer text-sm leading-5 ">david89@gmail.com</p>
                                    </div>
                                </div>
                                <div
                                    className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                    <div
                                        className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                        <div
                                            className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                            <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Shipping
                                                Address</p>
                                            <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180
                                                North King Street, Northhampton MA 1060</p>
                                        </div>
                                        <div
                                            className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                            <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Billing
                                                Address</p>
                                            <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180
                                                North King Street, Northhampton MA 1060</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex w-full justify-center items-center md:justify-start md:items-start">
                                        <button
                                            className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Edit
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        );
    }
}
