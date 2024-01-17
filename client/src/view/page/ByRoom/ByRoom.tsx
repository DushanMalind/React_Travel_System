import {Component} from "react";

export class ByRoom extends Component {
    render() {
        return (
            <>
                <div
                    className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 shadow-lg rounded-lg overflow-x-scroll overflow-y-scroll w-[400]">
                    <h2 className="text-2xl font-bold flex justify-center mb-4">Room Datatable</h2>
                    <table className="  table-fixed">
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
                </div>
            </>
        );
    }
}
