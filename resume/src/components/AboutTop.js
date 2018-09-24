import React from "react";
import arches from '../media/arches.jpg';
import men from '../media/men.jpg';
import styleMain from "../css/About.css";
import styleLocal from "../css/AboutTop.css";
export class AboutTop extends React.Component{
    render(){
        return(
    <div className={styleLocal.videoGames}>
            <div className={styleLocal.textLeft}>
                In my free time I face the never ending struggle to beat the next boss,
                build the best tower or explore the fantasy worlds. One of my favorite games is Minecraft as it leaves you in a world seemingly <font color="#ff8c00">without limits </font>
                to create a world of your own. Here is some of the world I've created.
            </div>
            <div className={styleLocal.picRight}>
                <div className={styleLocal.flipFront}>
                    <img className={styleMain.fill} src={arches} alt={""}/>
                </div>
                <div className={styleLocal.flipBack}>
                    <img className={styleMain.fill} src={men} alt={""}/>
                </div>
            </div>
    </div>);
    }
}