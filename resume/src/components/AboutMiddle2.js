import React from "react";
import styleMain from "../css/About.css";
import styleLocal from "../css/AboutMiddle.css";
import friends from '../media/friends.jpg';
import family from '../media/family.jpg';
export class AboutMiddle2 extends React.Component{
    render(){
        return(
                <div className={styleLocal.middle}>
                    <div className={styleLocal.container}>
                        <div className={styleLocal.middle}>
                            <div className={styleLocal.musicText2}>
                                It's safe to say that my friends and family make up the <font color="#ff8c00"> foundation </font> of who I am. I have been blessed with a wonderful
                                family who have supported me through everything and will continue to do so. I have also been blessed with an incredible group
                                of friends who are always willing to go on adventures.
                            </div>
                        </div>
                    </div>
                    <div className={styleLocal.container}>
                        <div className={styleLocal.middle}>
                            <div className={styleLocal.m2Left}>
                                <img className={styleMain.fill} src={family} alt={""}/>
                            </div>
                            <div className={styleLocal.m2Right}>
                                <img className={styleMain.fill} src={friends} alt={""}/>
                            </div>
                        </div>
                    </div>
                </div>);
    }
}