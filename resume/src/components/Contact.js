import React from "react";
import style from "../css/Contact.css";
import {NavLink} from "react-router-dom";
export class Contact extends React.Component{
    render(){
        return(
            <div>
                <div className={style.wrapper}>
                    <div className={style.needWork}>
                        At this time I am currently looking for employment and would love to be contacted about any opportunities within the technology field which may be a fit.
                    </div>
                    <div className={style.if}>
                        If you have such opportunity?
                    </div>
                    <div className={style.resume}>
                        <NavLink to={'/resume'} className={"nav-link"}>See my Resume</NavLink>
                        and contact me
                    </div>
                    <div className={style.git}>
                        Also checkout my Github to see what I'm up to
                    </div>
                </div>
            </div>
        );
    }
}