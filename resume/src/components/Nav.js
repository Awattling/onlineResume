import React from "react";
import {NavLink} from "react-router-dom";
import styles from '../css/Nav.css';
import {NavTab} from './NavTab';
export class Nav extends React.Component{
    render(){
        return(
            <div className={styles.stick}>
                <div className={styles.left}>
                    <NavLink to={'/about'} className={"nav-link"} activeClassName="active"><NavTab text={"About"} /></NavLink>
                </div>
                <div className={styles.tab}>
                    <NavLink to={'/experience'} className={"nav-link"} activeClassName="active"><NavTab text={"Experience"}/></NavLink>
                </div>
                <div className={styles.tab}>
                    <NavLink to={'/skills'} className={"nav-link"} activeClassName="active"><NavTab text={"Skills"}/></NavLink>
                </div>
                <div className={styles.tab}>
                    <NavLink to={'/projects'} className={"nav-link"} activeClassName="active"><NavTab text={"Projects"}/></NavLink>
                </div>
                <div className={styles.tab}>
                    <NavLink to={'/contact'} className={"nav-link"} activeClassName="active"><NavTab text={"Contact"}/></NavLink>
                </div>
            </div>
        );
    }
}