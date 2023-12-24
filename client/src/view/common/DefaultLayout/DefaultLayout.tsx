import {Component} from "react";
import {Navbar} from "../Navbar/Navbar";
import {MainContent} from "../MainContent/MainContent";
import {Footer} from "../Footer/Footer";

export class DefaultLayout extends Component {
    render() {
        return (
            <>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Navbar/>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <MainContent/>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Footer/>
            </>
        );
    }
}