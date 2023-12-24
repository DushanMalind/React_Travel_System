import {Component} from "react";

export class Home extends Component {
    render() {
        return (
            <>
                <div id="content" className="content grid grid-cols-1 gap-4">
                    <div className="px-20  ">
                        <h1 className="text-6xl mt-2 font-mono">Travel System</h1>
                        <h1 className="text-6xl mt-3 font-mono">Traveling Fun And Enjoy</h1>
                        <p className="font-mono">Find great places to stay, eat, shop, or visit from local experts</p>
                    </div>

                    {/*<div className="px-28  mt-4">
                        <h1>hhhhh</h1>
                    </div>*/}
                </div>
            </>
        );
    }
}