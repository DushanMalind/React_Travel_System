import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../page/home/Home";
import {About} from "../../page/about/About";
import {Room} from "../../page/room/Room";
import {Contact} from "../../page/contact/Contact";

export class MainContent extends Component {
    render() {
        return (
            <>
                <Routes>

                    <Route path="/home" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/room" Component={Room}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>
            </>
        );
    }
}
