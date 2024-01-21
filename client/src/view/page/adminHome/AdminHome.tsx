import {Component} from "react";
import axios from "axios";

interface State {
    data: any[]; // Define the correct type for your data
    userCount: number;
    totalProfit: number;
}

export class AdminHome extends Component <{}, State> {
    private api:any;

    constructor(props:{} | Readonly<{}>) {
        super(props);
        this.api=axios.create({baseURL:`http://localhost:4000`})
        this.state={
            data:[],
            userCount: 0,
            totalProfit: 0
        }
    }

    componentDidMount() {
        this.fetchData()
        this.fetchTotalProfit()
    }

    fetchData = async () => {
        try {
            const response = await this.api.get('/customer/userCount');
            const userCount: number = response.data; // Access userCount directly
            this.setState({ userCount });
        } catch (error) {
            console.log("Axios Error", error);
        }
    };

    fetchTotalProfit = async () => {
        try {
            const response = await this.api.get('/payment/totalPayment');
            const totalProfit: number = response.data[0].total;
            this.setState({ totalProfit });
            console.log(totalProfit);
        } catch (error) {
            console.log("Axios Error", error);
        }
    }

    render() {
        // @ts-ignore
        const { userCount,totalProfit } = this.state;
        return (
            <>
                <div className="container mx-auto mt-12">
                    <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                        <div className="w-full px-4 py-5  rounded-lg shadow bg-cyan-500 shadow-red-600">
                            <div className="text-md font-medium text-gray-950 truncate">
                                Room Requests
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                {userCount}
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                            <div className="text-sm font-medium text-gray-500 truncate">
                                Total Profit
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                ${totalProfit}
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                            <div className="text-sm font-medium text-gray-500 truncate">
                                Total Orders
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-gray-900">
                                20k
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
