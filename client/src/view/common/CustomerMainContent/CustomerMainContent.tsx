import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {CustomerDetails} from "../../page/CustomerDetails/CustomerDetails";


export class CustomerMainContent extends Component {
    render() {
        return (
            <>
                <Routes>

                    <Route path="/" ></Route>
                    <Route path="/yourDetails" Component={CustomerDetails}></Route>
                </Routes>
            </>
        );
    }
}
