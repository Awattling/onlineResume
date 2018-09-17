import React from "react";
import {Main} from "./Main";
import {Header} from "./components/Header";

export class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}
