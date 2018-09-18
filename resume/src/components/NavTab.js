import React from "react";
import styles from '../css/navTab.css';
import gear from '../media/orangeGear.png'

export class NavTab extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                <div>
                    <div className={""}></div>
                    <img className={""} src={gear} alt={""}/>
                </div>
                <h3>Text</h3>
            </div>
        );
    }
}