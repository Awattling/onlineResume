import React from "react";
import {Main} from "./Main";
import {Header} from "./components/Header";
import {Nav} from "./components/Nav";
export class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Nav/>
                <Main/>
            </div>
        );
    }
}
