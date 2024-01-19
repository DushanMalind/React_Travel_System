import {Component} from "react";

import axios from "axios";

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
                <div className={`ml-16 uppercase font-semibold tracking-wide text-9xl 
            ${data.roomsIsBooked === 'Booked' ?  'bg-green-400 text-white' : 'bg-red-400 text-white'
                }`}>{data.roomsIsBooked}
                </div>
                <div className="ml-10 mt-72 absolute text-red-600 uppercase font-semibold tracking-wide text-6xl">
                    {data.bookingDateTime}
                </div>

            </>
        );
    }
}
