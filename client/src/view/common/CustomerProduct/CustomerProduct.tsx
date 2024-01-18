import {Component} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import moment from "moment-timezone";

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


/*    componentDidMount() {
        this.api = axios.create({ baseURL: `http://localhost:4000` });
        this.fetchData()

    }

    fetchData= async () =>{
        try {
            this.api.get('/signUser/loginUser').then((res:{data:any}) =>{
                const jsonData=res.data;
                // @ts-ignore
                this.setState({data:jsonData});
            }).catch((error:any) =>{
                console.log("Axios Error",error);
            });
        }catch (error){
            console.log("Data NOT Loard",error);
        }
    }*/

    render() {

        const buttonStyle = {
            backgroundColor: this.state.isButtonDisabled ? 'gray' : 'bg-blue-500',
            color: 'white',
            fontWeight: 'bold',
            padding: '10px',
            borderRadius: '5px',
            cursor: this.state.isButtonDisabled ? 'not-allowed' : 'pointer',
        };

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
                            <button id="homeButton" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2
                            px-4 rounded" onClick={this.handleClick} disabled={this.state.isButtonDisabled}
                                    style={buttonStyle}>
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
        //this.setState({ isFormOpen: true });


        try {

            const signUserDetails = JSON.parse(localStorage.getItem('signUserDetails') || '{}');


            if (this.props.data.availability === 'available') {
                // this.setState({ isButtonDisabled: true });
                const currentDate = new Date();
                const formattedDate = currentDate.toISOString();

               /* const currentDate = moment().tz('Asia/Colombo');
                const formattedDate = currentDate.toISOString();*/



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
                    signUserDetails: this.props.data.signUserDetails,
                    customerID: signUserDetails.objectId,
                    customerName: signUserDetails.firstName + " " + signUserDetails.lastName,
                    customerEmail: signUserDetails.email,
                    customerContact: signUserDetails.contact,
                    customerAddress: signUserDetails.address,
                    bookingDateTime: formattedDate,



                }).then((response: any) => {
                    console.log("By Room", response);
                    toast.success("By Room Is Booking.Now You File Payment From");
                }).catch((error: any) => {
                    console.log("Not By Room", error);
                    toast("Not By Room" + error);
                }).finally(() => {
                     this.setState({ isButtonDisabled: true });
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
