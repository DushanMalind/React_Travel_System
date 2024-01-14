import {Component} from "react";

export class AdminProduct extends Component {
    render() {
        return (
            <>
                <div className="container mx-auto mt-10 bg-white  border-4 rounded-lg shadow relative m-10">

                    <div className="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold">
                            Edit product
                        </h3>
                        <button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                data-modal-toggle="product-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        <form action="#">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="product-name"
                                           className="text-sm font-medium text-gray-900 block mb-2">ID</label>
                                    <input type="text" name="id" id="id"

                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Apple Imac 27”"/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="category"
                                           className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                                    <input type="text" name="name" id="name"

                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Electronics"/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="brand"
                                           className="text-sm font-medium text-gray-900 block mb-2">Text</label>
                                    <input type="text" name="text" id="text"

                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="Apple"/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="price"
                                           className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                                    <input type="number" name="price" id="price"

                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="$2300"/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="price"
                                           className="text-sm font-medium text-gray-900 block mb-2">CurrentPrice</label>
                                    <input type="text" name="currentPrice" id="currentPrice"

                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="$2300"/>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="price"
                                           className="text-sm font-medium text-gray-900 block mb-2">Image Add</label>
                                    <input type="file" name="image" id="image" accept='image/*'

                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                           placeholder="$2300"/>
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
                    </div>

                    <div className="p-6 border-t border-gray-200 rounded-b">
                        <button
                            className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            type="button" >Save all
                        </button>
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
}
