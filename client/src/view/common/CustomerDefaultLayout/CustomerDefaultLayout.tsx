import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Customer} from "../../page/customer/Customer";

import {CustomerMainContent} from "../CustomerMainContent/CustomerMainContent";

export class CustomerDefaultLayout extends Component {
    render() {
        return (
            <>

                <CustomerMainContent/>
            </>
        );
    }
}
