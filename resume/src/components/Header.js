import React from "react";
import {Link} from "react-router-dom";
import styles from '../css/Header.css';
import gear from '../media/orangeGear.png'
import gitPic from '../media/gitMarkOrange.png';
import {NavTab} from './NavTab';
export class Header extends React.Component{
    render(){
        return <div>
            <div className={"row"}>

                <div className={"col-2 offset-2 center"}>
                    <div className={styles.imgHelper}></div>
                    <img className={styles.spinGear} src={gear} alt={""}/>
                </div>
                <div className={"col-4 center"}>
                    <h1>Austin Wattling</h1>
                </div>
                <div className={"col-2 center"}>
                    <div className={styles.imgHelper}></div>
                    <a href={"https://github.com/Awattling"}>
                        <img className={styles.gitPic} src={gitPic} alt={""} title={"Check out my Github"}/>
                    </a>

                </div>
            </div>
            <div className={"row"}>
                <div className={"col-8 offset-2 center"}>
                    <nav className={"navbar navbar-expand-sm bg-dark center"}>
                        <ul className={"navbar-nav"}>
                            <li className={"nav-item"}>
                                <Link to={'/about'} className={"nav-link"}><NavTab/></Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link to={'/experience'} className={"nav-link"}>Experience</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link to={'/skills'} className={"nav-link"}>Skills</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link to={'/projects'} className={"nav-link"}>Projects</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link to={'/contact'} className={"nav-link"}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>;
    }
}