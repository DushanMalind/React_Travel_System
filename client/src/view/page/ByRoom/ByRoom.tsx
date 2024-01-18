import {Component} from "react";

import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

interface ByRoomProps {
    data: any
}

interface ByRoomState {
    isButtonDisabled: boolean
    isFormOpen: boolean
    data: any[]
    id: number,
    title: string,
    roomCount: string,
    description: string,
    price: number,
    customerName: string,
    customerEmail: string,
    customerContact: string,
    roomsIsBooked: string,
    bookingDateTime: string,


}

export class ByRoom extends Component <ByRoomProps,ByRoomState> {

    private api: any;

    constructor(props:any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            isButtonDisabled: false,
            isFormOpen: false,
            data: []
        }
    }

    componentDidMount() {
        this.fetchData()

    }

    fetchData= async () =>{
        try {
            this.api.get('/customer/getAllCustomerRoom').then((res:{data:any}) =>{
                const jsonData=res.data;
                // @ts-ignore
                this.setState({data:jsonData});
            }).catch((error:any) =>{
                console.log("Axios Error",error);
            });
        }catch (error){
            console.log("Data NOT Loard",error);
        }
    }

    render() {

        const buttonText = this.state.isButtonDisabled ? 'Add Table' : 'Add From';



        return (
            <>
                {/*<div
                    className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 shadow-lg rounded-lg overflow-x-scroll overflow-y-scroll w-[400]">
                    <button type="button"

                            className="text-white bg-emerald-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium float-end
                            mr-8  rounded-lg text-sm px-5 py-2.5 text-center"
                            data-modal-toggle="product-modal">
                       ADD
                    </button>
                    <h2 className="text-2xl font-bold flex justify-center mb-4">Room Datatable</h2>
                    <table className="table-fixed">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Id</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Room</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Tittle</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">RoomCount</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Available</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Description</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Price</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Customer Name
                            </th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Customer Email
                            </th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Customer
                                Contact
                            </th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Customer
                                Address
                            </th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Room Book</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Image</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">

                        </tbody>
                    </table>
                </div
                >*/}

                <div
                    className="container mx-auto mt-10 bg-white  border-4 rounded-lg shadow relative m-10 overflow-x-hidden">
                    <button type="button" onClick={this.onClickWindowDownAndUp}

                            className="text-white bg-emerald-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium float-end
                            mr-8  rounded-lg text-sm px-5 py-2.5 text-center"
                            data-modal-toggle="product-modal">
                        {buttonText}
                    </button>

                    <div className="flex items-start justify-center p-5 border-b rounded-t">
                        <h3 className="text-4xl  font-semibold">
                            BY Room
                        </h3>

                    </div>

                    <div id="product-modal" className="p-6 space-y-6 hidden">
                        {/* <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">
                            {this.state.id}
                        </label>*/}
                        <form action="#">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="product-name"
                                           className="text-sm font-medium text-gray-900 block mb-2">ID</label>
                                    <input type="text" name="id" id="id"

                                           readOnly={true}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="ID"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="brand"
                                           className="text-sm font-medium text-gray-900 block mb-2">Title</label>
                                    <input type="text" name="title" id="title"

                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Text"/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="brand"
                                           className="text-sm font-medium text-gray-900 block mb-2">Room Count</label>
                                    <input type="text" name="roomCount" id="roomCount"

                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Text"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="brand"
                                           className="text-sm font-medium text-gray-900 block mb-2">Description</label>
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
                                    <label htmlFor="category"
                                           className="text-sm font-medium text-gray-900 block mb-2">Customer
                                        Name</label>
                                    <input type="text" name="room" id="room"

                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Title"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="category"
                                           className="text-sm font-medium text-gray-900 block mb-2">Customer
                                        Email</label>
                                    <input type="text" name="room" id="room"

                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Title"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="category"
                                           className="text-sm font-medium text-gray-900 block mb-2">Customer
                                        Contact</label>
                                    <input type="text" name="room" id="room"

                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Title"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="category"
                                           className="text-sm font-medium text-gray-900 block mb-2">Room Book</label>
                                    <input type="text" name="room" id="room"

                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Title"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="category"
                                           className="text-sm font-medium text-gray-900 block mb-2">Date And Time</label>
                                    <input type="text" name="room" id="room"

                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Title"/>
                                </div>



                            </div>
                        </form>

                        <div className="p-6 border-t space-x-3 border-gray-200 rounded-b">
                            <button
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
                            </button>

                            <button
                                className="text-white bg-yellow-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button">Update
                                <ToastContainer/>
                            </button>

                            <button
                                className="text-white bg-purple-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button" >Clear
                                <ToastContainer/>
                            </button>


                        </div>

                    </div>


                    <div id="table-hide" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 shadow-lg rounded-lg overflow-x-scroll overflow-y-scroll w-[400]">
                        <h2 className="text-2xl font-bold mb-4">By Room Datatable</h2>
                        <table id="example"
                               className="table-fixed   table align-middle mb-0 bg-white  table-responsive table-bordered table-hover  text-nowrap  ">
                            <thead>
                            <tr className="border-black border-[2px] px-1">
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase border-[1px]">Id</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase border-[1px]">Room</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase border-[1px]">Tittle</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase border-[1px]">RoomCount</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase border-[1px]">Available</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase border-[1px]">Description</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase border-[1px]">Price</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase border-[1px]">Customer
                                    Name
                                </th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Customer
                                    Email
                                </th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Customer
                                    Contact
                                </th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Customer
                                    Address
                                </th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Room Book</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Date And Time</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Image</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white">

                            {this.state.data.map((item, index) => (
                                <tr>
                                    <td className="border-[0.5px] py-4 px-6 border-b border-gray-200">{item.id}</td>
                                    <td className="border-[0.5px] py-4 px-6 border-b border-gray-200 truncate">{item.room}</td>
                                    <td className="border-[0.5px] py-4 px-6 border-b border-gray-200">{item.title}</td>
                                    <td className="border-[0.5px] py-4 px-6 border-b border-gray-200">{item.roomCount}</td>
                                    <td className="border-[0.5px] py-4 px-6 border-b border-gray-200">
                                        <span
                                            className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">{item.availability}</span>
                                    </td>
                                    <td className="border-[0.5px] text-[8px] py-4 px-6 border-b border-gray-200">{item.description}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">
                                        <span
                                            className="bg-fuchsia-900 text-white py-1 px-2 rounded-full text-xs">{item.price}</span>
                                    </td>
                                    <td className="border-[0.5px] py-4 px-6 border-b border-gray-200">{item.customerName}</td>
                                    <td className="border-[0.5px] py-4 px-6 border-b border-gray-200">{item.customerEmail}</td>
                                    <td className="border-[0.5px] py-4 px-6 border-b border-gray-200">{item.customerContact}</td>
                                    <td className="border-[0.5px] py-4 px-6 border-b border-gray-200">{item.customerAddress}</td>
                                    <td className="border-[0.5px] py-4 px-6 border-b border-gray-200">
                                        <span
                                            className={`text-white py-1 px-2 rounded-full text-xs
                            ${item.roomsIsBooked === 'Booked' ? 'bg-green-400 text-white' : 'bg-red-500 text-white'
                                            }`}>{item.roomsIsBooked}</span>
                                    </td>
                                    <td className="border-[0.5px] py-4 px-6 border-b border-gray-200">{item.bookingDateTime}</td>
                                    <td className="border-[0.5px] border-black items-center justify-center flex w-28 px-1 py-2">{<img
                                        src={item.image} alt="Room"/>}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                    </div>


                </div>
            </>
        );
    }
    private onClickWindowDownAndUp = async () => {
        const modal = document.getElementById('product-modal');
        const modal2 = document.getElementById('table-hide');
        //await this.dataBaseLastId();

        if (modal) {
            modal.classList.toggle('hidden');
            // @ts-ignore
            modal2.classList.toggle('hidden')
        } else {
            console.log("modal not found")
        }

        //this.setState({isButtonDisabled: this.state.isButtonDisabled  })
        //this.setState(this.state.isButtonDisabled ? {isButtonDisabled: false} : {isButtonDisabled: true})

        // @ts-ignore
        this.setState((prevState) => ({
            isButtonDisabled: !prevState.isButtonDisabled,
            buttonText: prevState.isButtonDisabled ? 'Add Table' : 'Add From'
        }));


    }
}
