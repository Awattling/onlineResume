import React from "react";
import styleMain from "../css/About.css";
import styleLocal from "../css/AboutMiddle.css";
import me from '../media/me.jpg';
import trumps from '../media/trumps.jpg';
import skip from '../media/skip.jpg';
export class AboutMiddle extends React.Component{
    render(){
        return(
        <div>
            <div className={styleLocal.middle}>
                <div className={styleLocal.musicText}>
                    For many years I was part of the internationally recognized Calgary Stampede Showband. In my time there I won 2 world championships,
                    traveled the world and became a leader within the activity. Team work, time management, and long term goals were fundamental to the
                    marching activity and I actively work to put those skills into a real life context. Among everything I learned the most important thing
                    I took away was an appreciation that <font color="#ff8c00"> hard work </font>can take you anywhere in life.
                </div>
                <div className={styleLocal.middle}>
                    <div className={styleLocal.left}>
                        <img className={styleMain.fill} src={skip} alt={""}/>
                    </div>
                    <div className={styleLocal.middleImgDiv}>
                        <img className={styleLocal.fillSm} src={me} alt={""}/>
                    </div>
                    <div className={styleLocal.right}>
                        <img className={styleMain.fill} src={trumps} alt={""}/>
                    </div>
                </div>
            </div>
         </div>);
    }
}