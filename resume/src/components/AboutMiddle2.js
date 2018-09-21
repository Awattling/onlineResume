import React from "react";
import ReactNbsp from "react-nbsp";
import styleMain from "../css/About.css";
import styleLocal from "../css/AboutMiddle.css";
import down from '../media/down.png';
import friends from '../media/friends.jpg';
import family from '../media/family.jpg';
export class AboutMiddle2 extends React.Component{
    render(){
        return(
            <div>
                <div className={styleLocal.middle}>
                    <div className={styleLocal.musicText2}>
                        <ReactNbsp/><ReactNbsp/><ReactNbsp/><ReactNbsp/><ReactNbsp/><ReactNbsp/><ReactNbsp/>
                        It's safe to say that my friends and family make up the <font color="#ff8c00"> foundation </font> of who I am. I have been blessed with a wonderful
                        family who have supported me through everything and will continue to do so. I have also been blessed with an incredible group
                        of friends who are always willing to go on adventures.
                    </div>
                    <div className={styleLocal.middle}>
                        <div className={"col-3 offset-3"}>
                            <img className={styleMain.fill} src={family} alt={""}/>
                        </div>
                        <div className={"col-3"}>
                            <img className={styleMain.fill} src={friends} alt={""}/>
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