import {Component} from "react";
import {Link} from "react-router-dom";
import "./SignIn.css"
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SignInProps {
    data: any
}

interface SignInState {
    firstName: string,
    lastName: string,
    address: string,
    contact: string,
    email: string,
    password: string,
    confirmPassword: string
}

export class SignIn extends Component<SignInProps,SignInState> {

    private api:any;

    constructor(props:any) {
        super(props);
        this.api = axios.create({baseURL:`http://localhost:4000`});

        this.state={
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            email:'',
            password:'',
            confirmPassword:''
        }
        this.handleMessageInputOnChange=this.handleMessageInputOnChange.bind(this);
    }

    render() {
        return (
            <>


                <div className="min-h-screen bg-gradient-to-bl from-blue-500 to-green-500 text-gray-900   justify-center">

                    <div className="mx-auto">
                        <div className="flex justify-center px-6 py-12">

                            <div className="w-full xl:w-3/4 lg:w-11/12 flex">

                                <div id="signContent" className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"></div>

                                <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                                    <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
                                    <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                                        <div className="mb-4 md:flex md:justify-between">
                                            <div className="mb-4 md:mr-2 md:mb-0">
                                                <label
                                                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                                                    First Name
                                                </label>
                                                <input
                                                    className="w-full px-10 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="firstName"
                                                    type="text" name="firstName" value={this.state.firstName} onChange={this.handleMessageInputOnChange}
                                                    placeholder="First Name"/>
                                            </div>
                                            <div className="md:ml-2">
                                                <label
                                                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                                                    Last Name
                                                </label>
                                                <input
                                                    className="w-full px-10 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="lastName"
                                                    type="text" name="lastName" value={this.state.lastName} onChange={this.handleMessageInputOnChange}
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4 md:flex md:justify-between">
                                            <div className="mb-4 md:mr-2 md:mb-0">
                                                <label
                                                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                                                    Address
                                                </label>
                                                <input
                                                    className="w-full px-10 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="firstName"
                                                    type="text" name="address" value={this.state.address} onChange={this.handleMessageInputOnChange}
                                                    placeholder="Address"/>
                                            </div>
                                            <div className="md:ml-2">
                                                <label
                                                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                                                    Contact
                                                </label>
                                                <input
                                                    className="w-full px-10 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="lastName"
                                                    type="text" name="contact" value={this.state.contact} onChange={this.handleMessageInputOnChange}
                                                    placeholder="Contact"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                                                Email
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="email"
                                                type="email" name="email" value={this.state.email} onChange={this.handleMessageInputOnChange}
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="mb-4 md:flex md:justify-between">
                                            <div className="mb-4 md:mr-2 md:mb-0">
                                                <label
                                                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                                                    Password
                                                </label>
                                                <input
                                                    className="w-full px-10 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="password"
                                                    type="password" name="password" value={this.state.password} onChange={this.handleMessageInputOnChange}
                                                    placeholder="******************"
                                                />
                                                <p className="text-xs italic text-red-500">Please choose a password.</p>
                                            </div>
                                            <div className="md:ml-2">
                                                <label
                                                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                                                    Confirm Password
                                                </label>
                                                <input
                                                    className="w-full px-10 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="confirmPassword"
                                                    type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleMessageInputOnChange}
                                                    placeholder="******************"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-6 text-center">
                                            <button
                                                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                                type="button"
                                                onClick={this.OnsendButtonClick} >
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
                                                Register Account
                                            </button>
                                        </div>
                                        <hr className="mb-6 border-t"/>
                                        <div className="text-center">
                                            <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                               href="#">
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <div className="text-center">
                                            <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                               href="#">
                                                <Link to="/login">Already have an account? Login!</Link>
                                            </a>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="border-b w-1/5 md:w-1/4"></span>
                                            <a href="#" className="text-xs text-gray-500 uppercase">
                                                <Link to="/home">Home Page</Link>
                                            </a>
                                            <span className="border-b w-1/5 md:w-1/4"></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    handleMessageInputOnChange(event:{target:{value:any; name:any}}){
        const target=event.target;
        const name=target.name
        const value=target.value;


        // @ts-ignore
        this.setState({
            [name]:value
        })

    }

    private OnsendButtonClick = () => {
        const { password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            console.error("Passwords do not match");
            toast("Passwords do not match");
            return;
        }

        try{
            this.api.post('/SignUser/save',{
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                address:this.state.address,
                contact:this.state.contact,
                email:this.state.email,
                password:this.state.password,
                confirmPassword:this.state.confirmPassword
            }).then((res:{data:any})=>{
                let jsonData=res.data;
                console.log(jsonData);
                toast(jsonData);
            }).catch((err:any)=>{
                console.log("Axios Error",err);

            });

        }catch (error){
            console.error("Error Submitting Form data",error);
        }
        finally {
            this.setState({
                firstName:'',
                lastName:'',
                address:'',
                contact:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }
    }
}
