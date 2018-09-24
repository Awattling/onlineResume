import React from "react";
import styles from "../css/About.css";
import {AboutTop} from "./AboutTop";
import {AboutMiddle} from "./AboutMiddle";
import {AboutMiddle2} from "./AboutMiddle2";
export class About extends React.Component{
    render(){
        return(
            <div className={styles.aboutMain}>
                <div className={styles.change}>
                   I am a <font color="red">Video Gamer </font>
                </div>

                <AboutTop/>

                <div className={styles.change}>
                    I am a <font color="red">Musician</font>
                </div>

                <AboutMiddle/>

                <div className={styles.change}>
                    I am a <font color="red">Friend and Family Member</font>
                </div>

                <AboutMiddle2/>

                <div className={styles.change}>
                    I am <font color="red">Excited for the Future</font>
                </div>
                <div className={styles.text}>
                    <div className={styles.finalText}>
                        With a strong <font color="#ff8c00"> foundation </font> and some <font color="#ff8c00"> hard work </font> your future is <font color="#ff8c00"> without limits. </font>
                    </div>
                </div>
                <div className={styles.footer}>
                    Made by A&W Productions
                </div>
            </div>
        );
    }
}