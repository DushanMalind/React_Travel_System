import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../page/home/Home";

export class MainContent extends Component {
    render() {
        return (
            <>
                <Routes>

                    <Route path="/home" Component={Home}></Route>
                </Routes>
            </>
        );
    }
}