import React from "react";
import { Switch, Route } from 'react-router-dom';
import {Experience} from './components/Experience';
import {About} from './components/About';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';
import {Resume} from './components/Resume';

export class Main extends React.Component{
    render(){
        return(
        <Switch location={window.location}>
            <Route exact path='/' component={About}/>
            <Route path='/about' component={About}/>
            <Route path='/skills' component={Skills}/>
            <Route path='/experience' component={Experience}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/resume' component={Resume}/>
        </Switch>
        );
    }
}