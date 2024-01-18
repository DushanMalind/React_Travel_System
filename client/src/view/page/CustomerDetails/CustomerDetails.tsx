import {ChangeEvent, Component} from "react";
import logo from "../../../images/tour2.jpg";
import {Link} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
// @ts-ignore

interface Propse {
    data:any
}

interface State {
    firstName: string;
    lastName: string;
    address: string;
    contact: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export class CustomerDetails extends Component<Propse, State>  {

    constructor(props: {} | Readonly<{}>) {
        // @ts-ignore
        super(props);
        const signUserDetails = JSON.parse(localStorage.getItem("signUserDetails") || "{}");
        this.state = {
            firstName: signUserDetails.firstName || "",
            lastName: signUserDetails.lastName || "",
            address: signUserDetails.address || "",
            contact: signUserDetails.contact || "",
            email: signUserDetails.email || "",
            password: signUserDetails.password || "",
            confirmPassword: signUserDetails.confirmPassword || "",
        };
    }

    handleMessageInputOnChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        } as Pick<State, keyof State>);
    }

    private OnUpdateButtonClick = async () => {
        try {

            /*const signUserDetails = JSON.parse(localStorage.getItem("signUserDetails") || "{}");
            const { firstName, lastName, address, contact, email, password, confirmPassword } = this.state;

            // Update the local storage
            const requestBody = {
                id: signUserDetails.id,
                firstName,
                lastName,
                address,
                contact,
                email,
                password,
                confirmPassword,
            };


            // Update the server data
            await fetch('/signUser/updateUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            toast("User details updated successfully!");*/
        } catch (error) {
            console.log("Update Not Form data", error);
            toast("Update Not Form Data " + error);
        }
    };


    render() {

        const signUserDetails = JSON.parse(localStorage.getItem('signUserDetails') || '{}');
        return (
            <>
                <header
                    className="sticky bg-blue-400 inset-0 z-50 border-b border-slate-100  backdrop-blur-lg rounded">
                    <nav
                        className="mx-auto flex max-w-8xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-4 py-4">
                        <div className="relative flex items-center ml">
                            <div className="flex items-center">
                                <div className="relative">
                                    <img
                                        src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                                        className="object-cover btn- h-9 w-9 rounded-full mr-2"
                                        alt=""
                                    />
                                    <div
                                        className="absolute bottom-0 right-1 h-3 w-3 bg-green-400 rounded-full"></div>
                                </div>
                                <p className="font-semibold text-sm">{signUserDetails.firstName + " " + signUserDetails.lastName}</p>
                            </div>
                            <a href="/">
                                <img className="ml-8 rounded-full" src={logo} loading="lazy"
                                     width="42" height="32"/></a>
                        </div>
                        <ul className="hidden items-center justify-center gap-10 md:flex ml-4">
                            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                                <a href="#">
                                    {/* eslint-disable-next-line react/jsx-no-undef */}
                                    <Link to="/customer">Rooms</Link>
                                </a>
                            </li>
                            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                                <a href="#">
                                    <Link to="/customer/yourDetails">Your Details</Link>
                                </a>
                            </li>
                        </ul>
                        <div className="flex-grow"></div>
                        <div className="hidden items-center justify-center gap-6 md:flex mr-8">
                            <a href="#"
                               className="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 font-dm
                               text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200
                               ease-in-out hover:scale-[1.03]">
                                <Link to="/login">Log Out</Link>
                            </a>
                        </div>
                        <div className="relative flex items-center justify-center md:hidden ">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                     className="h-6 w-auto text-slate-900">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </header>

                <div
                    className="min-h-screen bg-gradient-to-bl from-blue-500 to-green-500 text-gray-900   justify-center">

                    <div className="mx-auto">
                        <div className="flex justify-center px-6 py-12">

                            <div className="w-full xl:w-3/4 lg:w-11/12 flex">

                                <div id="signContent"
                                     className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"></div>

                                <div
                                    className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                                    <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Your
                                        Details</h3>
                                    <form
                                        className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                                        <div className="mb-4 md:flex md:justify-between">
                                            <div className="mb-4 md:mr-2 md:mb-0">
                                                <label
                                                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                                                    First Name
                                                </label>
                                                <input
                                                    className="w-full px-10 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="firstName"
                                                    type="text" name="firstName"
                                                    placeholder="First Name"  value={this.state.firstName} onChange={(e) => this.handleMessageInputOnChange(e)}
                                                />
                                            </div>
                                            <div className="md:ml-2">
                                                <label
                                                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                                                Last Name
                                                </label>
                                                <input
                                                    className="w-full px-10 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="lastName"
                                                    type="text" name="lastName" value={this.state.lastName} onChange={(e) => this.handleMessageInputOnChange(e)}
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
                                                    type="text" name="address" value={this.state.address} onChange={(e) => this.handleMessageInputOnChange(e)}
                                                    placeholder="Address" />
                                            </div>
                                            <div className="md:ml-2">
                                                <label
                                                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                                                    Contact
                                                </label>
                                                <input
                                                    className="w-full px-10 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="lastName"
                                                    type="text" name="contact" value={this.state.contact} onChange={(e) => this.handleMessageInputOnChange(e)}
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
                                                type="email" name="email" value={this.state.email} onChange={(e) => this.handleMessageInputOnChange(e)}
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
                                                    type="password" name="password" value={this.state.password} onChange={(e) => this.handleMessageInputOnChange(e)}
                                                    placeholder="******************"
                                                />
                                                <p className="text-xs italic text-red-500">Please
                                                    choose a password.</p>
                                            </div>
                                            <div className="md:ml-2">
                                                <label
                                                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                                                    Confirm Password
                                                </label>
                                                <input
                                                    className="w-full px-10 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="confirmPassword"
                                                    type="password"
                                                    name="confirmPassword" value={this.state.confirmPassword} onChange={(e) => this.handleMessageInputOnChange(e)}
                                                    placeholder="******************"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-6 text-center">
                                            <button
                                                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                                type="button" onClick={this.OnUpdateButtonClick}>
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
                                                Update Details
                                            </button>
                                        </div>
                                        <hr className="mb-6 border-t"/>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }

  /*  handleMessageInputOnChange(event:{target:{value:any; name:any}}){
        const target=event.target;
        const name=target.name
        const value=target.value;

        // @ts-ignore
        this.setState({
            [name]:value
        })
    }


    private OnUpdateButtonClick = () => {
        try {

            const signUserDetails = JSON.parse(localStorage.getItem('signUserDetails') || '{}');
            // @ts-ignore
            const {firstName, lastName, address, contact, email, password, confirmPassword} = this.state;
            const data = {
                firstName: firstName || signUserDetails.firstName,
                lastName: lastName || signUserDetails.lastName,
                address: address || signUserDetails.address,
                contact: contact || signUserDetails.contact,
                email: email || signUserDetails.email,
                password: password || signUserDetails.password,
                confirmPassword: confirmPassword || signUserDetails.confirmPassword
            }
            console.log("Update Form data", data)
            toast("Update Form Data " + data);

        }catch (error){
            console.log("Update Not Form data",error)
            toast("Update Not Form Data "+ error);
        }
    }*/
}
