import {Component} from "react";

export class CustomerByRoom extends Component {
    render() {
        return (
            <>
                <div id="product-modal" className="container p-6 space-y-6 hidden">
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
            </>
        );
    }
}
