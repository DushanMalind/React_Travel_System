import {Component} from "react";

export class Payment extends Component {
    render() {
        return (
            <>

                <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                    <div className="flex justify-start item-start space-y-2 flex-col">
                        <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order
                            #13432</h1>
                        <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">21st Mart 2021
                            at 10:34 PM</p>
                    </div>
                    <div
                        className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                        <div
                            className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                            <div
                                className="flex justify-center  md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                <div
                                    className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                                    <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                                    <div
                                        className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                        <div className="flex justify-between w-full">
                                            <p className="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">$56.00</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base dark:text-white leading-4 text-gray-800">Discount <span
                                                className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span>
                                            </p>
                                            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">-$28.00
                                                (50%)</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                                            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">$8.00</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                        <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">$36.00</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
