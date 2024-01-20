import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {AdminProduct} from "../../page/adminProduct/AdminProduct";
import {AdminHome} from "../../page/adminHome/AdminHome";
import {ByRoom} from "../../page/ByRoom/ByRoom";
import {Payment} from "../../page/Payment/Payment";




export class AdminMainContent extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" Component={AdminHome}></Route>
                    <Route path="/addRoom" Component={AdminProduct}></Route>
                    <Route path="/byRoom" Component={ByRoom}></Route>
                    <Route path="/payment" Component={Payment}></Route>
                </Routes>
            </>
        );
    }
}
