import {Component} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
interface ProductProps {
    data: any
}

interface ProductState {
    isActive: boolean
    isButtonDisabled: boolean
}

export class Product extends Component <ProductProps,ProductState>{

    constructor(props:ProductProps) {
        super(props);
        this.state={
            isActive:false,
            isButtonDisabled: false
        }
    }

    render() {

        const buttonText = this.state.isButtonDisabled ? 'Login By Room' : 'By Now';

        const {data}= this.props;
        const image=require(`../../../images/${data.image}`);

        return (

                <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40
                    max-w-sm">
                    <div className="relative">
                        <img className="w-full" src={image}
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
                                {data.roomsCount}
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">{data.description}</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">{data.price}</span>
                            <button id="homeButton" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2
                            px-4 rounded" onClick={this.onSendButtonClick} disabled={this.state.isButtonDisabled}>
                                {/*Buy Now*/}
                                {buttonText}
                                <ToastContainer/>
                            </button>
                        </div>
                    </div>
                </div>


        );
    }

    private onSendButtonClick =() => {


        toast('🦄You Have Login  Account!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        this.setState({isButtonDisabled:false
        });


        setInterval(() => {
            this.setState({ isButtonDisabled: true });
        }, 2000);

        /*setTimeout(() => {
            this.setState({ isButtonDisabled: false });
        }, 5000);*/



    }
}
