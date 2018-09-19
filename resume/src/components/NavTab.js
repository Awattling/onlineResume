import React from "react";
import styles from '../css/Nav.css';
import gear from '../media/WhiteGear.png'

export class NavTab extends React.Component{
    render(){
        return(
            <div className={styles.gearsCon}>
                <div>
                    <img className={styles.gears} src={gear} alt={""}/>
                </div>
                <h4>{this.props.text}</h4>
            </div>
        );
    }
}