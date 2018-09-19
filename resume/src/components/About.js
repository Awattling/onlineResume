import React from "react";
import ReactNbsp from "react-nbsp";
import styles from "../css/About.css";
import screw from '../media/screw.png'

export class About extends React.Component{
    render(){
        return(
            <div className={styles.aboutMain}>
                <div className={styles.stick}>
                   <div className={styles.me}>
                       I am a
                   </div>
                    <div className={styles.change}>
                        Video Gamer
                    </div>
                    <div className={styles.line}>
                    </div>
                </div>
                <div className={styles.videoGames}>
                    <div className={styles.textLeft}>
                        <p>
                            <ReactNbsp/><ReactNbsp/><ReactNbsp/><ReactNbsp/><ReactNbsp/><ReactNbsp/><ReactNbsp/>
                            Evening games become late night games which become early morning games. In my free time I face the never ending struggle to beat the next boss,
                            build the best tower or explore the fantasy worlds. I discovered video games quite young and have not been able to leave their grasp. In fact I'm
                            trying to make a life long career of the parts I love about it. The imagination of someone is not bound by the physical world and thus contains no
                            limits. It's in this world of no limits that video games are born. On of my favorite games is Minecraft as it leaves you in a world seemingly without
                            limits to create a world of your own. I am guilty of letting my imagination take hold of my time in Minecraft and as result I built some pretty cool
                            things.
                        </p>
                    </div>
                    <div className={styles.picRight}>
                        <img src={screw} alt={""}/>
                    </div>
                </div>
                <div className={styles.middle}>
                        Musician
                    <div className={styles.text}>
                        <p>
                            Evening games become late night games which become early morning games. In my free time I face the never ending struggle to beat the next boss,
                            build the best tower or explore the fantasy worlds. I discovered video games quite young and have not been able to leave their grasp. In fact I'm
                            trying to make a life long career of the parts I love about it. The imagination of someone is not bound by the physical world and thus contains no
                            limits. It's in this world of no limits that video games are born. On of my favorite games is Minecraft as it leaves you in a world seemingly without
                            limits to create a world of your own. I am guilty of letting my imagination take hold of my time in Minecraft and as result I built some pretty cool
                            things.
                        </p>
                    </div>
                </div>

                <div className={styles.bottom}>
                        Challenger
                    <div className={styles.text}>
                        <p>
                            Evening games become late night games which become early morning games. In my free time I face the never ending struggle to beat the next boss,
                            build the best tower or explore the fantasy worlds. I discovered video games quite young and have not been able to leave their grasp. In fact I'm
                            trying to make a life long career of the parts I love about it. The imagination of someone is not bound by the physical world and thus contains no
                            limits. It's in this world of no limits that video games are born. On of my favorite games is Minecraft as it leaves you in a world seemingly without
                            limits to create a world of your own. I am guilty of letting my imagination take hold of my time in Minecraft and as result I built some pretty cool
                            things.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}