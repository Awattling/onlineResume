import React from "react";
import styles from "../css/About.css";
import {AboutTop} from "./AboutTop";
import {AboutMiddle} from "./AboutMiddle";
import {AboutMiddle2} from "./AboutMiddle2";
export class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth, height: window.innerHeight };
        this.handleScroll = this.handleScroll.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.updateWindowDimensions);
    };

    handleScroll(event) {
        console.log('the scroll things', event)
        console.log("window offset:" + window.pageYOffset);
        console.log("window width:" + this.state.height);
        console.log("window height:" + this.state.width);
    };

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render(){
        return(
            <div className={styles.aboutMain}>
                <div className={styles.change}>
                   I am a <font color="red">Video Gamer </font>
                    <div className={styles.line}/>
                </div>

                <AboutTop/>

                <div className={styles.change}>
                    I am a <font color="red">Musician</font>
                    <div className={styles.line}/>
                </div>

                <AboutMiddle/>

                <div className={styles.change}>
                    I am a <font color="red">Friend and Family Member</font>
                    <div className={styles.line}/>
                </div>

                <AboutMiddle2/>

                <div className={styles.change}>
                    I am <font color="red">Excited for the Future</font>
                    <div className={styles.line}/>
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