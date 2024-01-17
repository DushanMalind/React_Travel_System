import {ChangeEvent, Component} from "react";
import axios from "axios";

import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {data} from "autoprefixer";
import './AdminProduct.css';

interface AdminProps{
    data: any
}

interface AdminProductState {
    id: number,
    room: string,
    title: string,
    roomCount: string,
    description: string,
    price: number,
    image: string,
    data:any[];
    isButtonDisabled: boolean;
    selectedAvailability: string;


}

export class AdminProduct extends Component<AdminProps,AdminProductState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});

        this.state = {
            isButtonDisabled: false,
            id: 0,
            room: 'Room',
            title: '',
            roomCount: '',
            description: '',
            price: 0,
            image: '',
            data: [],
            selectedAvailability: 'available',


        }
        this.handleMessageInputOnChange=this.handleMessageInputOnChange.bind(this);
    }





    componentDidMount() {
        //this.api = axios.create({ baseURL: `http://localhost:4000` });
        this.dataBaseLastId();
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

        // @ts-ignore
        return (
            <>


                <div
                    className="container mx-auto mt-10 bg-white  border-4 rounded-lg shadow relative m-10">
                    <button type="button" onClick={this.onClickWindowDownAndUp}

                            className="text-white bg-emerald-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium float-end
                            mr-8  rounded-lg text-sm px-5 py-2.5 text-center"
                            data-modal-toggle="product-modal">
                        {buttonText}
                    </button>

                    <div className="flex items-start justify-center p-5 border-b rounded-t">
                        <h3 className="text-4xl  font-semibold">
                            ADD Room
                        </h3>

                        {/* <button type="button" onClick={this.onClickWindowDownAndUp} id="product-modal"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                data-modal-toggle="product-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </button>*/}
                    </div>

                    <div id="product-modal" className="p-6 space-y-6 hidden">
                        {/* <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">
                            {this.state.id}
                        </label>*/}
                        <form action="#">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="product-name"
                                           className="text-sm font-medium text-gray-900 block mb-2">ID</label>
                                    <input type="text" name="id" id="id"
                                           value={this.state.id} onChange={this.handleMessageInputOnChange}
                                           readOnly={true}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="ID"/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="category"
                                           className="text-sm font-medium text-gray-900 block mb-2">Room</label>
                                    <input type="text" name="room" id="room"
                                           value={this.state.room} onChange={this.handleMessageInputOnChange}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Title"/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="brand"
                                           className="text-sm font-medium text-gray-900 block mb-2">Title</label>
                                    <input type="text" name="title" id="title"
                                           value={this.state.title} onChange={this.handleMessageInputOnChange}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Text"/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="brand"
                                           className="text-sm font-medium text-gray-900 block mb-2">Room Count</label>
                                    <input type="text" name="roomCount" id="roomCount"
                                           value={this.state.roomCount} onChange={this.handleMessageInputOnChange}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Text"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="brand"
                                           className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                                    <input type="text" name="description" id="description"
                                           value={this.state.description} onChange={this.handleMessageInputOnChange}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Text"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="price"
                                           className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                                    <input type="number" name="price" id="price"
                                           value={this.state.price} onChange={this.handleMessageInputOnChange}
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="2300"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="price"
                                           className="text-sm font-medium text-gray-900 block mb-2">Image Add</label>
                                    <input type="file" name="image" id="image" accept='image/*'
                                           onChange={this.convertBase64}

                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Image"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="availability"
                                           className="text-sm font-medium text-gray-900 block mb-2">
                                        Availability
                                    </label>
                                    <select
                                        name="availability"
                                        id="availability"
                                        value={this.state.selectedAvailability}
                                        onChange={this.handleAvailabilityChange}
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                                        rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                                        <option value="available">Available</option>
                                        <option value="notAvailable">Not Available</option>
                                    </select>
                                </div>

                                {/* <div className="col-span-full">
                                    <label htmlFor="product-details"
                                           className="text-sm font-medium text-gray-900 block mb-2">Product
                                        Details</label>
                                    <textarea id="product-details"
                                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                                              placeholder="Details"></textarea>
                                </div>*/}
                            </div>
                        </form>

                        <div className="p-6 border-t space-x-3 border-gray-200 rounded-b">
                            <button
                                className="text-white bg-emerald-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button" onClick={this.OnSendButtonClick}>Save all
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
                                type="button" onClick={this.onUpdateClick}>Update
                                <ToastContainer/>
                            </button>

                            <button
                                className="text-white bg-purple-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button" onClick={this.onClickClearData}>Clear
                                <ToastContainer/>
                            </button>

                            <button
                                className="text-white bg-red-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button" onClick={this.onDeleteClick}>Delete
                                <ToastContainer/>
                            </button>

                            <button
                                className="text-white bg-emerald-900 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button" onClick={this.idGenarate}>Id Genarate
                                <ToastContainer/>
                            </button>

                        </div>

                    </div>


                    <div id="table-hide"  className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <h2 className="text-2xl font-bold mb-4">Room Datatable</h2>
                        <table id="example"
                               className="table-auto w-full table align-middle mb-0 bg-white  table-responsive table-bordered table-hover  text-nowrap  ">
                            <thead>
                            <tr className="border-black border-[2px] px-1">
                                <th className="border-black border-[0.5px] px-4 py-2">ID</th>
                                <th className="border-black border-[0.5px] px-4 py-2">Room</th>
                                <th className="border-black border-[0.5px] px-4 py-2">Room Count</th>
                                <th className="border-black border-[0.5px] px-4 py-2">Title</th>
                                <th className="border-black border-[0.5px] px-4 py-2">Description</th>
                                <th className="border-black border-[0.5px] px-4 py-2">Price</th>
                                <th className="border-black border-[0.5px] px-4 py-2">Image</th>
                                <th className="border-black border-[0.5px] px-4 py-2">Available</th>
                            </tr>
                            </thead>
                            <tbody>

                            {this.state.data.map((item, index) => (
                                <tr className="border-black border-[0.5px] px-1 hover:bg-orange-100" key={index}
                                    onClick={() => this.handleTableRowClick(item)}>
                                    <td className="text-[12px] border-black border-[0.5px] px-1 py-2">{item.id}</td>
                                    <td className="text-[12px] border-black border-[0.5px] px-1 py-2">{item.room}</td>
                                    <td className="text-[12px] border-black border-[0.5px] px-1 py-2">{item.roomCount}</td>
                                    <td className="text-[12px] border-black border-[0.5px] px-1 py-2">{item.title}</td>
                                    <td className="text-[8px] border-black border-[0.5px] px-1 py-2 ">{item.description}</td>
                                    <td className="text-[12px] border-black border-[0.5px] px-1 py-2">{item.price}</td>
                                    <td className="border-black items-center justify-center flex w-28 px-1 py-2">{<img
                                        src={item.image} alt="Room"/>}</td>
                                    <td className="text-[12px] border-black border-[0.5px] px-1 py-2">{item.availability}</td>
                                </tr>


                            ))}


                            </tbody>
                        </table>
                        <div className="py-1 px-4">
                            <nav className="flex items-center space-x-1">
                                <button type="button"
                                        className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    <span aria-hidden="true">«</span>
                                    <span className="sr-only">Previous</span>
                                </button>
                                <button type="button"
                                        className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
                                        aria-current="page">1
                                </button>
                                <button type="button"
                                        className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">2
                                </button>
                                <button type="button"
                                        className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">3
                                </button>
                                <button type="button"
                                        className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    <span className="sr-only">Next</span>
                                    <span aria-hidden="true">»</span>
                                </button>
                            </nav>
                        </div>
                    </div>


                </div>
                {/* <div className="container mx-auto mt-10  border-2 border-blue-400 rounded-lg">
                    <div className="mt-10 text-center font-bold">Contact Us</div>
                    <div className="mt-3 text-center text-4xl font-bold">Make an Appointment</div>
                    <div className="p-8">
                        <div className="flex gap-4">
                            <input type="Name" name="name"
                                   className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                   placeholder="Full Name *"/>
                            <input type="email" name="email"
                                   className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                   placeholder="Email *"/>
                        </div>
                        <div className="my-6 flex gap-4">
                            <select name="select" id="select"
                                    className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                                <option className="font-semibold text-slate-300">Please Select</option>
                            </select>
                            <select name="select" id="select"
                                    className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                                <option className="font-semibold text-slate-300">4:00 Available</option>
                            </select>
                        </div>
                        <div className="">
                            <textarea name="textarea" id="text" cols={30} rows={10}
                                      className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300">Message</textarea>
                        </div>
                        <div className="text-center">
                            <a className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Book
                                Appoinment</a>
                        </div>
                    </div>
                </div>*/}








            </>
        );
    }

    handleAvailabilityChange = (event: ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedAvailability: event.target.value });
    };

    convertBase64 = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            console.log(reader);

            reader.onload = () => {
                // @ts-ignore
                this.setState({
                    image: reader.result as string,
                });
            };

            reader.onerror = (error) => {
                console.log("Error:", error);
            };
        }
    };

    handleTableRowClick = (item: any) => {
        this.setState({
            id: item.id,
            room: item.room,
            title: item.title,
            roomCount: item.roomCount,
            description: item.description,
            price: item.price,
            image: item.image,
            selectedAvailability: item.availability,
        });
        this.onClickWindowDownAndUp();
    };

    private onClickClearData = () => {
        this.setState({
            id: 0,
            room: 'Room',
            title: '',
            roomCount: '',
            description: '',
            price: 0,
            image: '',
            selectedAvailability: 'available',
        })
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


    private OnSendButtonClick = () => {
        try {
            this.api.post('/product/save',{
                id:this.state.id,
                room:this.state.room,
                title:this.state.title,
                roomCount:this.state.roomCount,
                description:this.state.description,
                price:this.state.price,
                image:this.state.image,
                availability:this.state.selectedAvailability,
            }).then(async (res: { data: any }) => {
                let jsonData = res.data;
                toast("Success Submit Form Data" + jsonData);
                console.log(jsonData);
                await this.fetchData();
                await this.dataBaseLastId();
            }).catch((error:any)=>{
                console.log("Axios error",error)
                toast("Error Submit Form Data "+ error);
            })
        }catch (error){
            toast("Error Submit Form Data "+ error);
        }
        finally {
            this.setState({
                id: 0,
                room: 'Room',
                title: '',
                roomCount: '',
                description: '',
                price: 0,
                image: '',
            })
        }
    }

    private onUpdateClick = () => {
        try {
            this.api.put('product/update/'+this.state.id,{
                id:this.state.id,
                room:this.state.room,
                title:this.state.title,
                roomCount:this.state.roomCount,
                description:this.state.description,
                price:this.state.price,
                image:this.state.image,
                availability:this.state.selectedAvailability,
            }).then(async (res:{data: any}) =>{
                let jsonData=res.data;
                //toast.success("Success Update Form Data");
                toast.success('Success Update Form Data', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
                await this.fetchData();
                console.log(jsonData);
                this.onClickClearData();
            }).catch((error:any)=>{
                console.log("Axios error",error)
                toast("Error Update Form Data "+ error);
            })
        }catch (error){
            console.log("Update Not Form data",error)
            toast("Update Not Form Data "+ error);
        }
        /*finally {
            this.onClickWindowDownAndUp();
        }*/
    }


    private onDeleteClick = () => {
        try {
            this.api.delete('product/delete/'+this.state.id).then(async (res: { data: any }) => {
                let jsonData = res.data;
                toast.success("Success Delete Form Data");
                console.log(jsonData);
                await this.fetchData();
                this.onClickClearData();
            }).catch((error:any)=>{
                console.log("Axios error",error)
                toast("Error Delete Form Data "+ error);
            })
        }catch (error){
            console.log("Delete Not Form data",error)
            toast("Delete Not Form Data "+ error);
        }
    }


    private dataBaseLastId = async () => {
        try {
            const response = await this.api.get('/product/lastId');
            const jsonData = response.data;

            if (jsonData && jsonData.id !== undefined) {
                this.setState({id: jsonData.id});
            } else {
                console.error("Invalid response format:", jsonData);
            }
        } catch (error) {
            console.error("Axios Error", error);
            console.log("Error Last Id", error);
        }
    }


    private idGenarate = async () => {
        await this.dataBaseLastId();
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
