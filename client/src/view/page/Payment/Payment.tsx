import {Component} from "react";
import {ToastContainer} from "react-toastify";
import axios from "axios";
import {RoomAcceptProduct} from "../../common/RoomAcceptProduct/RoomAcceptProduct";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export class Payment extends Component {
    private api:any;

    constructor(props:{} | Readonly<{}>) {
        super(props);
        this.api=axios.create({baseURL:`http://localhost:4000`})
        this.state={
            data:[],
            customerEmail: "",
            totalPayment: "",
        }
    }

    componentDidMount() {
        this.fetchData()
    }



  /*  fetchData = async () => {

        // @ts-ignore
        const { customerEmail } = this.state;

        try {
            const response = await this.api.get(`/customer/booking/${customerEmail}`);
            const jsonData = response.data;
            this.setState({ data: jsonData });
        } catch (error) {
            console.log("Axios Error", error);
            console.log("Data NOT Loaded", error);
        }
    };*/

    fetchData = async () => {
        // @ts-ignore
        const { customerEmail } = this.state;

        try {
            const response = await this.api.get(`/customer/booking/${customerEmail}`);
            const jsonData = response.data;
            this.setState({ data: jsonData });

            // Calculate total payment based on the response data
            // @ts-ignore
            const totalPayment = jsonData.reduce((total, product) => {
                return total + (product.roomsIsBooked === 'Booked' ? product.price : 0);
            }, 0);

            this.setState({ totalPayment: totalPayment.toFixed(2) }); // Assuming totalPayment is a decimal value
        } catch (error) {
            console.error("Axios Error", error);
            console.error("Data NOT Loaded", error);
        }
    };

    handleEmailChange = (e:any) => {
        this.setState({ customerEmail: e.target.value });
    };

    handleSendClick = () => {
        this.fetchData();
    };

    handleDownloadPDF = () => {
        // Get the element with the ID "pdf-content"
        const input = document.getElementById("pdf-content");

        if (input) {
            // Capture the content of the "pdf-content" element using html2canvas
            html2canvas(input, { scale: 2 }).then((canvas) => {
                // Create a new jsPDF instance
                const pdf = new jsPDF("p", "mm", "a4");

                // Add the captured image of "pdf-content" to the PDF
                pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);

                // Additional content: Card Details
                pdf.setFontSize(12);
                pdf.text("Card Details:", 10, pdf.internal.pageSize.height - 20);

                // Iterate over the 'data' array and add details to the PDF
                // Assuming 'data' is an array of objects with properties 'customerEmail' and 'price'

                // @ts-ignore
                data.forEach((product, index) => {
                    const yOffset = 30 + index * 10;
                    pdf.text(`${index + 1}. Room Name: ${product.customerEmail}, Price: ${product.price}`, 10, pdf.internal.pageSize.height - yOffset);
                });

                // Save the PDF with the specified filename
                pdf.save("payment_details.pdf");
                console.log(pdf);
            });
        }
    };



    render() {
        // @ts-ignore
        const { data, customerEmail, totalPayment } = this.state;
        return (
            <>
                <div className="px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto overflow-y-scroll overflow-x-hidden">
                    <div className="flex justify-start items-start space-y-2 flex-col">
                        <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                            Payment Details
                        </h1>
                    </div>

                    <div id="product-modal" className="p-6 space-y-6">
                        <form action="#">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="customerEmail"
                                           className="text-sm font-medium text-gray-900 block mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="customerEmail"
                                        id="customerEmail"
                                        value={customerEmail}
                                        onChange={this.handleEmailChange}
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="totalPayment"
                                           className="text-sm font-medium text-gray-900 block mb-2">
                                        Total Payment
                                    </label>
                                    <input
                                        type="text"
                                        name="totalPayment"
                                        id="totalPayment"
                                        value={totalPayment}
                                        readOnly
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                        placeholder="Total Payment"
                                    />
                                </div>
                            </div>
                        </form>

                        <div className="p-6 border-t space-x-3 border-gray-200 rounded-b">
                            <button
                                className="text-white bg-yellow-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button"
                                onClick={this.handleSendClick}
                            >
                                Send
                                <ToastContainer/>
                            </button>

                            <button
                                className="text-white bg-emerald-900 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button"
                            >
                                Clear
                                <ToastContainer/>
                            </button>

                            <button
                                className="text-white bg-emerald-900 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button"
                                onClick={this.handleDownloadPDF}
                            >
                                Download PDF
                                <ToastContainer/>
                            </button>
                        </div>
                    </div>

                    <div
                        className="overflow-hidden grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 mx-auto p-5 sm:p-10 md:p-16">
                        {data.map((product: any) => (
                            <RoomAcceptProduct key={product.id} data={product}/>
                        ))}
                    </div>
                </div>


            </>
        );
    }
}
