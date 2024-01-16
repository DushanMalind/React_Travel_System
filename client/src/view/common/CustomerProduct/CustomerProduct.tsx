import {Component} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

interface ProductProps {
    data: any
}

interface ProductState {
    isActive: boolean
    isButtonDisabled: boolean
}

export class CustomerProduct extends Component <ProductProps,ProductState>{

    private api: any;
    constructor(props:any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state={
            isActive:false,
            isButtonDisabled: false
        }
    }
    render() {
        const {data}= this.props;
        return (
            <>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40
                    max-w-sm">
                    <div className="relative">
                        <img className="w-full" src={data.image}
                             alt="Product Image"/>
                        <div
                            className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm
                            font-medium">{data.room}
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
                            <button id="homeButton" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2
                            px-4 rounded" onClick={this.handleClick}>
                                By Now
                                <ToastContainer/>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    private handleClick = () => {
        try {
            this.setState({isButtonDisabled: true});
            this.api.post(`/customer/byTheRoom`, {
                title: this.props.data.title,
                price: this.props.data.price,
                image: this.props.data.image,
                room: this.props.data.room,
                roomCount: this.props.data.roomCount,
                description: this.props.data.description,
                roomsIsAvailable: this.props.data.roomsIsAvailable,
                roomsIsBooked: this.props.data.roomsIsBooked,
            }).then((response: any) => {
                console.log("By Room",response);
                toast("By Room");
            }).catch((error: any) => {
                console.log("Not By Room",error)
                toast("Not By Room"+ error);
            });
        }catch (error) {
            console.log("Not By Room",error)
            toast("Not By Room"+ error);
        }
    }

}
