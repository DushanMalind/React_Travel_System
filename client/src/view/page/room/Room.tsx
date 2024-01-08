import {Component} from "react";
import room1 from "../../../images/room1.jpg"
import room2 from "../../../images/room2.jpg"
import room3 from "../../../images/room3.jpg"
import room4 from "../../../images/room4.jpg"
import room5 from "../../../images/room5.jpg"
import room6 from "../../../images/room6.jpg"
import room7 from "../../../images/room7.jpg"
import room8 from "../../../images/room8.jpg"

/*import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';*/
import {Product} from "../../common/product/Product";
import axios from "axios";

export class Room extends Component {

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
            /*const response=await fetch('/product.json');
            const jsonData=await response.json();
            console.log(jsonData);
            this.setState({data:jsonData});*/
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


        return (

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mx-auto p-5 sm:p-10 md:p-16">

                {
                    data.map((product:any)=>(
                        <Product key={product.id} data={product}/>
                    ))
                }

         {/*       <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40
                    max-w-sm">
                    <div className="relative">
                        <img className="w-full" src={room1}
                             alt="Product Image"/>
                        <div
                            className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">Room
                        </div>
                    </div>
                    <div className="p-4">


                        <div className="flex items-baseline">
                            <h3 className="text-lg font-medium mb-2">Product Title</h3>
                            <span
                                className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full
                                uppercase font-semibold tracking-wide ml-2">New</span>
                            <div className="ml-16 text-green-600 text-xs uppercase font-semibold tracking-wide">
                                3 beds &bull; 2 baths
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis vitae ante
                            vel eros fermentum faucibus sit amet euismod lorem.</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">$19.99</span>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={this.onSendButtonClick}>
                                Buy Now

                                <ToastContainer/>

                            </button>
                        </div>
                    </div>
                </div>


                <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40
                    max-w-sm">
                    <div className="relative">
                        <img className="w-full" src={room2}
                             alt="Product Image"/>
                        <div
                            className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">Room
                        </div>
                    </div>
                    <div className="p-4">


                        <div className="flex items-baseline">
                            <h3 className="text-lg font-medium mb-2">Product Title</h3>
                            <span
                                className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full
                                uppercase font-semibold tracking-wide ml-2">New</span>
                            <div className="ml-16 text-green-600 text-xs uppercase font-semibold tracking-wide">
                                3 beds &bull; 2 baths
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis vitae ante
                            vel eros fermentum faucibus sit amet euismod lorem.</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">$19.99</span>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"  onClick={this.onSendButtonClick}>
                                Buy Now
                                <ToastContainer/>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40
                    max-w-sm">
                    <div className="relative">
                        <img className="w-full" src={room3}
                             alt="Product Image"/>
                        <div
                            className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">Room
                        </div>
                    </div>
                    <div className="p-4">


                        <div className="flex items-baseline">
                            <h3 className="text-lg font-medium mb-2">Product Title</h3>
                            <span
                                className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full
                                uppercase font-semibold tracking-wide ml-2">New</span>
                            <div className="ml-16 text-green-600 text-xs uppercase font-semibold tracking-wide">
                                3 beds &bull; 2 baths
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis vitae ante
                            vel eros fermentum faucibus sit amet euismod lorem.</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">$19.99</span>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"  onClick={this.onSendButtonClick}>
                                Buy Now
                                <ToastContainer/>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40
                    max-w-sm">
                    <div className="relative">
                        <img className="w-full" src={room4}
                             alt="Product Image"/>
                        <div
                            className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">Room
                        </div>
                    </div>
                    <div className="p-4">


                        <div className="flex items-baseline">
                            <h3 className="text-lg font-medium mb-2">Product Title</h3>
                            <span
                                className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full
                                uppercase font-semibold tracking-wide ml-2">New</span>
                            <div className="ml-16 text-green-600 text-xs uppercase font-semibold tracking-wide">
                                3 beds &bull; 2 baths
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis vitae ante
                            vel eros fermentum faucibus sit amet euismod lorem.</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">$19.99</span>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"  onClick={this.onSendButtonClick}>
                                Buy Now
                                <ToastContainer/>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40
                    max-w-sm">
                    <div className="relative">
                        <img className="w-full" src={room5}
                             alt="Product Image"/>
                        <div
                            className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">Room
                        </div>
                    </div>
                    <div className="p-4">


                        <div className="flex items-baseline">
                            <h3 className="text-lg font-medium mb-2">Product Title</h3>
                            <span
                                className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full
                                uppercase font-semibold tracking-wide ml-2">New</span>
                            <div className="ml-16 text-green-600 text-xs uppercase font-semibold tracking-wide">
                                3 beds &bull; 2 baths
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis vitae ante
                            vel eros fermentum faucibus sit amet euismod lorem.</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">$19.99</span>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"  onClick={this.onSendButtonClick}>
                                Buy Now
                                <ToastContainer/>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40
                    max-w-sm">
                    <div className="relative">
                        <img className="w-full" src={room6}
                             alt="Product Image"/>
                        <div
                            className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">Room
                        </div>
                    </div>
                    <div className="p-4">


                        <div className="flex items-baseline">
                            <h3 className="text-lg font-medium mb-2">Product Title</h3>
                            <span
                                className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full
                                uppercase font-semibold tracking-wide ml-2">New</span>
                            <div className="ml-16 text-green-600 text-xs uppercase font-semibold tracking-wide">
                                3 beds &bull; 2 baths
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis vitae ante
                            vel eros fermentum faucibus sit amet euismod lorem.</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">$19.99</span>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"  onClick={this.onSendButtonClick}>
                                Buy Now
                                <ToastContainer/>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40
                    max-w-sm">
                    <div className="relative">
                        <img className="w-full" src={room7}
                             alt="Product Image"/>
                        <div
                            className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">Room
                        </div>
                    </div>
                    <div className="p-4">


                        <div className="flex items-baseline">
                            <h3 className="text-lg font-medium mb-2">Product Title</h3>
                            <span
                                className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full
                                uppercase font-semibold tracking-wide ml-2">New</span>
                            <div className="ml-16 text-green-600 text-xs uppercase font-semibold tracking-wide">
                                3 beds &bull; 2 baths
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis vitae ante
                            vel eros fermentum faucibus sit amet euismod lorem.</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">$19.99</span>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"  onClick={this.onSendButtonClick}>
                                Buy Now
                                <ToastContainer/>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40
                    max-w-sm">
                    <div className="relative">
                        <img className="w-full" src={room8}
                             alt="Product Image"/>
                        <div
                            className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">Room
                        </div>
                    </div>
                    <div className="p-4">


                        <div className="flex items-baseline">
                            <h3 className="text-lg font-medium mb-2">Product Title</h3>
                            <span
                                className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full
                                uppercase font-semibold tracking-wide ml-2">New</span>
                            <div className="ml-16 text-green-600 text-xs uppercase font-semibold tracking-wide">
                                3 beds &bull; 2 baths
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis vitae ante
                            vel eros fermentum faucibus sit amet euismod lorem.</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">$19.99</span>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"  onClick={this.onSendButtonClick}>
                                Buy Now
                                <ToastContainer/>
                            </button>
                        </div>
                    </div>
                </div>*/}


            </div>

        );
    }

}
