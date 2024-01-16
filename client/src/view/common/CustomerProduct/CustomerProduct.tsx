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
    isFormOpen: boolean
}

export class CustomerProduct extends Component <ProductProps,ProductState>{

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
                            px-4 rounded" onClick={this.handleClick}  disabled={this.state.isButtonDisabled}>
                                By Now

                                <ToastContainer/>
                            </button>
                        </div>
                    </div>
                </div>

               {/* {this.state.isFormOpen && (
                <div id="product-modal" className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 ">
                    <form action="#">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="product-name"
                                       className="text-sm font-medium text-gray-900 block mb-2">F_Name</label>
                                <input type="text" name="id" id="id"

                                       readOnly={true}
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                       placeholder="ID"/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="category"
                                       className="text-sm font-medium text-gray-900 block mb-2">L_Name</label>
                                <input type="text" name="room" id="room"

                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                       placeholder="Title"/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="brand"
                                       className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                                <input type="text" name="title" id="title"

                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                       placeholder="Text"/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="brand"
                                       className="text-sm font-medium text-gray-900 block mb-2">Address</label>
                                <input type="text" name="roomCount" id="roomCount"

                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                       placeholder="Text"/>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="brand"
                                       className="text-sm font-medium text-gray-900 block mb-2">Contact</label>
                                <input type="text" name="description" id="description"

                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                       placeholder="Text"/>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="price"
                                       className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                                <input type="number" name="price" id="price"

                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                       placeholder="2300"/>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="price"
                                       className="text-sm font-medium text-gray-900 block mb-2">Payment Slip</label>
                                <input type="file" name="image" id="image" accept='image/*'


                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                       placeholder="Image"/>
                            </div>
                        </div>
                    </form>
                </div>
                )}*/}
            </>
        );
    }

    /* private handleClick = () => {
         try {
             //this.setState({isButtonDisabled: false});
             this.api.post(`/customer/byTheRoom`, {
                 id: this.props.data.id,
                 title: this.props.data.title,
                 price: this.props.data.price,
                 image: this.props.data.image,
                 room: this.props.data.room,
                 roomCount: this.props.data.roomCount,
                 description: this.props.data.description,
                 availability: this.props.data.availability,
                 roomsIsBooked: this.props.data.roomsIsBooked,
             }).then((response: any) => {
                 console.log("By Room",response);
                 toast("By Room Successfully");
                 //this.setState({ isButtonDisabled: true });
             }).catch((error: any) => {
                 console.log("Not By Room",error)
                 toast("Not By Room"+ error);
             }).finally(() => {
                 //this.setState({isButtonDisabled: false});
             });
         }catch (error) {
             console.log("Not By Room",error)
             toast("Not By Room"+ error);
             //this.setState({ isButtonDisabled: false });
         }
     }*/

    private handleClick = () => {
        //this.setState({ isFormOpen: true });


        try {

            if (this.props.data.availability === 'available') {
                // this.setState({ isButtonDisabled: true });

                this.api.post(`/customer/byTheRoom`, {
                    id: this.props.data.id,
                    title: this.props.data.title,
                    price: this.props.data.price,
                    image: this.props.data.image,
                    room: this.props.data.room,
                    roomCount: this.props.data.roomCount,
                    description: this.props.data.description,
                    availability: this.props.data.availability,
                    roomsIsBooked: this.props.data.roomsIsBooked,
                }).then((response: any) => {
                    console.log("By Room", response);
                    toast.success("By Room Is Booking.Now You File Payment From");
                }).catch((error: any) => {
                    console.log("Not By Room", error);
                    toast("Not By Room" + error);
                }).finally(() => {
                    // this.setState({ isButtonDisabled: false });
                });
            } else {
                console.log("Room not available");
                toast.error("Room not available");
            }
        } catch (error) {
            console.log("Not By Room", error);
            toast("Not By Room" + error);
            // this.setState({ isButtonDisabled: false });
        }
    }


}
