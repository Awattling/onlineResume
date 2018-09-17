import React from "react";
import { Switch, Route } from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';


export class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/about' component={About}/>
            </Switch>
        );
    }
}