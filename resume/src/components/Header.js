import React from "react";
import styles from '../css/Header.css';
import gear from '../media/orangeGear.png'
import gitPic from '../media/gitMarkOrange.png';
export class Header extends React.Component{
    render(){
        return <div>
            <div className={styles.row}>
                <div className={styles.left}>
                    <div className={styles.imgHelper}></div>
                    <img className={styles.spinGear} src={gear} alt={""}/>
                </div>
                <div className={styles.middle}>
                    <h1>Austin Wattling</h1>
                </div>
                <div className={styles.right}>
                    <div className={styles.imgHelper}></div>
                    <a href={"https://github.com/Awattling"}>
                        <img className={styles.gitPic} src={gitPic} alt={""} title={"Check out my Github"}/>
                    </a>

                </div>
            </div>
        </div>;
    }
}