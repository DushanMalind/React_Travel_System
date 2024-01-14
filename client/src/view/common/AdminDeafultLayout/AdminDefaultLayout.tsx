import {Component} from "react";
import {AdminMainContent} from "../AdminMainContent/AdminMainContent";
import {Admin} from "../../page/admin/Admin";
import {Route, Routes} from "react-router-dom";



export class AdminDefaultLayout extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/*" Component={Admin}></Route>
                </Routes>
            </>
        );
    }
}
