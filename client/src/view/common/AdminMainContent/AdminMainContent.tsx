import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {AdminProduct} from "../../page/adminProduct/AdminProduct";
import {AdminHome} from "../../page/adminHome/AdminHome";




export class AdminMainContent extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" Component={AdminHome}></Route>
                    <Route path="/addRoom" Component={AdminProduct}></Route>
                </Routes>
            </>
        );
    }
}
