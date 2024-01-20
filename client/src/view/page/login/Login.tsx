import {Component} from "react";
import './login.css'
import logo from "../../../images/tour10.jpg"
import {Link} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/*// @ts-ignore
import { browserHistory } from 'react-router';*/
import { createBrowserHistory } from 'history';


interface LoginProps {
    data: any
}

interface LoginState {
    email: string,
    password: string,
    /*token: string*/
}

export class Login extends Component<LoginProps,LoginState> {

    private api:any;

    constructor(props:any) {
        super(props);
        this.api = axios.create({baseURL:`http://localhost:4000`});
        this.state={
            email:'',
            password:'',
            /*token:''*/
        }
        this.handleMessageInputOnChange=this.handleMessageInputOnChange.bind(this);
    }

    render() {
        return (
            <>

                <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 text-gray-900 flex justify-center  ">
                    <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                            <div>
                                <img src={logo}
                                     className="w-mx-auto rounded" />
                            </div>
                            <div className="mt-12 flex flex-col items-center">
                                <div className="w-full flex-1 mt-8">
                                    <div className="flex flex-col items-center">
                                        <button
                                            className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                            <div className="bg-white p-2 rounded-full">
                                                <svg className="w-4" viewBox="0 0 533.5 544.3">
                                                    <path
                                                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                        fill="#4285f4" />
                                                    <path
                                                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                        fill="#34a853" />
                                                    <path
                                                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                        fill="#fbbc04" />
                                                    <path
                                                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                        fill="#ea4335" />
                                                </svg>
                                            </div>
                                            <span className="ml-4">
                                Sign In with Google
                            </span>
                                        </button>

                                    </div>

                                    <div className="my-12 border-b text-center">
                                        <div
                                            className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                            Or sign In with Cartesian E-mail
                                        </div>
                                    </div>

                                    <div className="mx-auto max-w-xs">
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="email" name="email" value={this.state.email} onChange={this.handleMessageInputOnChange} placeholder="Email"/>
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type="password" name="password" value={this.state.password}  onChange={this.handleMessageInputOnChange} placeholder="Password"/>

                                        <button onClick={this.onLoginButtonClick}
                                            className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor"
                                                 stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                                <circle cx="8.5" cy="7" r="4"/>
                                                <path d="M20 8v6M23 11h-6"/>
                                            </svg>
                                            <span className="ml-">
                                Sign In
                                                 <ToastContainer
                                                  /*   position="top-right"
                                                     autoClose={5000}
                                                     hideProgressBar={false}
                                                     newestOnTop={false}
                                                     closeOnClick
                                                     rtl={false}
                                                     pauseOnFocusLoss
                                                     draggable
                                                     pauseOnHover
                                                     theme="light"*/
                                                 />
                            </span>
                                        </button>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="border-b w-1/5 md:w-1/4"></span>
                                            <a href="#" className="text-xs text-gray-500 uppercase">
                                                <Link to="/sign">or sign up</Link>
                                            </a>
                                            <span className="border-b w-1/5 md:w-1/4"></span>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="border-b w-1/5 md:w-1/4"></span>
                                            <a href="#" className="text-xs text-gray-500 uppercase">
                                                <Link to="/home">Home Page</Link>
                                            </a>
                                            <span className="border-b w-1/5 md:w-1/4"></span>
                                        </div>
                                        <p className="mt-6 text-xs text-gray-600 text-center">
                                            I agree to abide by Cartesian Kinetics
                                            <a href="#" className="border-b border-gray-500 border-dotted">
                                                Terms of Service
                                            </a>
                                            and its
                                            <a href="#" className="border-b border-gray-500 border-dotted">
                                                Privacy Policy
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
                            <div id="content" className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
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


  /*  private onLoginButtonClick =() =>{

        try {
            this.api.post('/signUser/oneUser', {
                email:this.state.email,
                password:this.state.password

            }).then((res:{data:any})=>{
                    const jsonData=res.data;
                    console.log(jsonData);
                    if (jsonData){
                        toast.success(`Your Susses Login Account ${jsonData.firstName}`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });

                        let redirectUrl = jsonData.isAdmin ? "/customer" : "/admin";
                        redirectUrl += `?firstName=${jsonData.firstName}&email=${jsonData.email}`;

                        // Redirecting to the new URL
                        window.location.href = redirectUrl;

                       /!* if (jsonData.isAdmin) {
                            window.location.href = "/customer";
                        } else {
                            window.location.href = "/admin";
                        }*!/

                    }
                //window.location.href="/admin";
                })
                .catch(function (error:any) {
                    console.log("Axios Error",error);
                    toast.error("You don't have an account, Try Sign up first")
                });
        } catch (error) {
            console.error('Error signing in:', error);
            // Handle error, e.g., show a toast notification
            toast.error('Error signing in');
        }
    }*/

    private onLoginButtonClick = () => {
        try {
            this.api.post('/signUser/oneUser', {
                email: this.state.email,
                password: this.state.password
            }).then((res: { data: any }) => {
                const jsonData = res.data;
                console.log(jsonData);
                if (jsonData) {
                    // Save the jsonData to localStorage
                    localStorage.setItem('signUserDetails', JSON.stringify(jsonData));

                    toast.success(`Your Successful Login: ${jsonData.firstName}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });

                   /* const history = createBrowserHistory();

                    const location = history.location;*/

                    // Constructing the URL with parameters
                    let redirectUrl = jsonData.isAdmin ? "/customer" : "/admin";
                    //redirectUrl += `?firstName=${jsonData.firstName}&email=${jsonData.email}`;
                    redirectUrl += `?firstName=${encodeURIComponent(jsonData.firstName)}&email=${encodeURIComponent(jsonData.email)}`;
                   // location.search = redirectUrl;

                    window.location.href = redirectUrl;
                   /* console.log(redirectUrl);

                    console.log(location)

                    history.push(redirectUrl, { some: 'state' });*/

                    //this.props.history.push(redirectUrl);

                }
            }).catch(function (error: any) {
                console.log("Axios Error", error);
                toast.error("You don't have an account, Try Sign up first");
            });
        } catch (error) {
            console.error('Error signing in:', error);
            toast.error('Error signing in');
        }
    }




    /* handleSignIn = async () => {
         const { email, password } = this.state;
         try {
             const response = await this.api.get('/signUser/find/', { email });
             const response2 = await this.api.get('/signUser/finds/', { password });
             response2.data.password = password;
             response.data.email = email;
             toast("Success");
             // Handle the response data, maybe set it in the component state or trigger some action
         } catch (error) {
             console.error('Error signing in:', error);
             // Handle error, e.g., show a toast notification
             toast.error('Error signing in');
         }
     };*/
}
