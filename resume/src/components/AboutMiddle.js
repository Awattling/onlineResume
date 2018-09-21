import React from "react";
import ReactNbsp from "react-nbsp";
import styleMain from "../css/About.css";
import styleLocal from "../css/AboutMiddle.css";
import down from '../media/down.png';
import me from '../media/me.jpg';
import trumps from '../media/trumps.jpg';
import skip from '../media/skip.jpg';
export class AboutMiddle extends React.Component{
    render(){
        return(
        <div>
            <div className={styleLocal.middle}>
                <div className={styleLocal.musicText}>
                    <ReactNbsp/><ReactNbsp/><ReactNbsp/><ReactNbsp/><ReactNbsp/><ReactNbsp/><ReactNbsp/>
                    For many years I was part of the internationally recognized Calgary Stampede Showband. In my time there I won 2 world championships,
                    traveled the world and became a leader within the activity. Team work, time management, and long term goals were fundamental to the
                    marching activity and I actively work to put those skills into a real life context. Among everything I learned the most important thing
                    I took away was an appreciation that <font color="#ff8c00"> hard work </font>can take you anywhere in life.
                </div>
                <div className={styleLocal.middle}>
                    <div className={"col-3 offset-1"}>
                        <img className={styleMain.fill} src={skip} alt={""}/>
                    </div>
                    <div className={"col-4"}>
                        <img className={styleMain.fill} src={me} alt={""}/>
                    </div>
                    <div className={"col-3"}>
                        <img className={styleMain.fill} src={trumps} alt={""}/>
                    </div>
                </div>
                <div className={styleMain.lineTwo}/>
                <div className={styleMain.scroll}>
                    <img className={styleMain.scrollImg} src={down} alt={""}/>
                </div>
            </div>
         </div>);
    }
}