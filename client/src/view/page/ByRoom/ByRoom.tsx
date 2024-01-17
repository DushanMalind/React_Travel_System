import {Component} from "react";

export class ByRoom extends Component {
    render() {
        return (
            <>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 shadow-lg rounded-lg overflow-hidden">
                    <table className="w-full table-fixed">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Id</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Email</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Phone</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
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
