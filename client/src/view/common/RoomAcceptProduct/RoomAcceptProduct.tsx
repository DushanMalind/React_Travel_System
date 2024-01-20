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
                <div id="allCard" className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40
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
                            {/*<span
                                className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full
                                uppercase font-semibold tracking-wide ml-2">New</span>*/}
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
                    </div>
                </div>
            </>
        );
    }
}
