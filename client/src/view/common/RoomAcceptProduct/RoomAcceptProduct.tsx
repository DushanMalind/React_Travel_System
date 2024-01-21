import {Component} from "react";

import axios from "axios";
import {ToastContainer} from "react-toastify";

interface RoomAcceptProductProps {
    data: any
}

interface RoomAcceptProductState {
    isActive: boolean
    isButtonDisabled: boolean
    isFormOpen: boolean
}

export class RoomAcceptProduct extends Component <RoomAcceptProductProps,RoomAcceptProductState>{


    private api: any;

    constructor(props:any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state={
            isActive:false,
            isButtonDisabled: false,
            isFormOpen: false
        }
    }

    render() {
        const {data}= this.props;

        const signUserDetails = JSON.parse(localStorage.getItem('signUserDetails') || '{}');


        return (
            <>
                {/* <div id="allCard" className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40
                    max-w-sm">
                    <div className="relative">
                        <img className="w-full" src={data.image}
                             alt="Product Image"/>
                        <div
                            className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm
                            font-medium">{data.room}
                        </div>
                        <div
                            className={`absolute top-0 left-2 px-1 py-1 m-2 rounded-md text-sm font-medium
                            ${data.availability === 'available' ? 'bg-green-400 text-white' : 'bg-red-400 text-white'
                            }`}>{data.availability}
                        </div>
                    </div>
                    <div className="p-4">


                        <div className="flex items-baseline">
                            <h3 className="text-lg font-medium mb-2">{data.title}</h3>
                            <div className="ml-16 text-green-600 text-xs uppercase font-semibold tracking-wide">
                                {data.roomCount}
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">{data.description}</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">${data.price}</span>


                        </div>

                        <div className={`left-2 px-1 py-1 m-2 rounded-md text-sm font-medium
                            ${data.roomsIsBooked === 'Booked' ? 'bg-green-400 text-white' : 'bg-red-400 text-white'
                        }`}>{data.roomsIsBooked}

                        </div>
                        <div className="left-2 px-1 py-1 m-2 rounded-md text-sm font-medium border-2">
                            <span className="font-bold text-lg">{data.bookingDateTime}</span>

                        </div>
                    </div>
                </div>*/}


                 <div className="py-4 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                    <div
                        className="mt-4 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-2 space-y-4 md:space-y-6 xl:space-y-0">
                        <div
                            className="flex flex-col justify-start items-start w-full space-y-2 md:space-y-6 xl:space-y-8">
                            <div
                                className="flex flex-col justify-start items-start bg-green-200 border-black border-2 rounded px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Room Details</p>
                                <div
                                    className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                    <div className="pb-4 md:pb-8 w-full md:w-64">
                                        <img className="w-full" src={data.image}
                                             alt="Product Image"/>
                                    </div>
                                    <div
                                        className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{data.title}</h3>
                                            <div className="flex justify-start items-start flex-col space-y-2">
                                                <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                    className="dark:text-gray-400 text-gray-950 font-bold">Type: </span>{data.room}
                                                </p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                    className="dark:text-gray-400  text-gray-950 font-bold">Room Count: </span>{data.roomCount}
                                                </p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                    className="dark:text-gray-400  text-gray-950 font-bold">Description: </span>{data.description}
                                                </p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                    className="dark:text-gray-400  text-gray-950 font-bold">Date: </span>{data.bookingDateTime}
                                                </p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                    className="dark:text-gray-400  text-gray-950 font-bold">Contact: </span>{data.customerContact}
                                                </p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                    className="dark:text-gray-400  text-gray-950 font-bold">Address: </span>{data.customerAddress}
                                                </p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                    className="dark:text-gray-400  text-gray-950 font-bold">Email: </span>{data.customerEmail}
                                                </p>
                                                <div className={`left-2 px-1 py-1 m-2 rounded-md text-sm font-medium
                            ${data.roomsIsBooked === 'Booked' ? 'bg-green-400 text-white' : 'bg-red-400 text-white'
                                                }`}>{data.roomsIsBooked}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            <p className="text-base dark:text-white xl:text-lg leading-6"><span
                                                className="text-red-300">${data.price}</span></p>
                                            <p className="text-base dark:text-white xl:text-lg leading-6">Room No :<span
                                                className="text-gray-950">{data.id}</span></p>
                                            <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">${data.price}</p>
                                        </div>
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
