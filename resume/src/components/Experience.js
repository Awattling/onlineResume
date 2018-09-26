import React from "react";
import style from "../css/Experience.css";
import {ModalComp} from "./Modal.js";
export class Experience extends React.Component{
    constructor(props){
       super(props);
        this.state = {
            catHover: false,
            ticketHover: false,
            bandHover: false,
            xaHover: false,
            visible: false,
            company: "",
        }
    }
    hoverOn = (comp) => {
        if(comp === "marching"){
            this.setState({
                bandHover: true,
            });
        }else if(comp === "cat"){
            this.setState({
                catHover: true,
            });
        }else if(comp === "xa"){
            this.setState({
                xaHover: true,
            });
        }else if(comp === "ticket"){
            this.setState({
                ticketHover: true,
            })
        }
    };
    hoverOff = (comp) => {
        if(comp === "marching"){
            this.setState({
                bandHover: false,
            });
        }else if(comp === "cat"){
            this.setState({
                catHover: false,
            });
        }else if(comp === "xa"){
            this.setState({
                xaHover: false,
            });
        }else if(comp === "ticket"){
            this.setState({
                ticketHover: false,
            })
        }
    };
    clickOn = (comp) => {
        if(comp === "marching"){
            this.setState({
                visible: true,
                company: "marching",
            });
        }else if(comp === "cat"){
            this.setState({
                visible: true,
                company: "catering",
            });
        }else if(comp === "xa"){
            this.setState({
                visible: true,
                company: "xa",
            });
        }else if(comp === "ticket"){
            this.setState({
                visible: true,
                company: "ticketmaster",
            })
        }
    };
    hideModal(){
        this.setState({
            visible: false,

        });
    }
    render(){
        return(
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.year}>
                            <h2>2018</h2>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.year}>
                            <h2>2017</h2>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.year}>
                            <h2>2016</h2>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.year}>
                            <h2>2015</h2>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.year}>
                            <h2>2014</h2>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.year}>
                            <h2>2013 - 1995</h2>
                        </div>
                    </div>
                </div>
                <div className={style.containerOverlay}>
                    <div className={style.row}>
                        <div className={this.state.bandHover ? style.bandHover : style.band} onMouseEnter={() => this.hoverOn("marching")} onMouseLeave={() => this.hoverOff("marching")} onClick={() => this.clickOn("marching")}/>
                        <div className={this.state.ticketHover ? style.ticketmasterHover : style.ticketmaster} onMouseEnter={() => this.hoverOn("ticket")} onMouseLeave={() => this.hoverOff("ticket")} onClick={() => this.clickOn("ticket")}/>
                        <div className={this.state.xaHover ? style.xaHover : style.xa}  onMouseEnter={() => this.hoverOn("xa")} onMouseLeave={() => this.hoverOff("xa")} onClick={() => this.clickOn("xa")}/>
                        <div className={this.state.catHover ? style.cateringAHover : style.cateringA} onMouseEnter={() => this.hoverOn("cat")} onMouseLeave={() => this.hoverOff("cat")} onClick={() => this.clickOn("cat")}/>
                        <div className={this.state.catHover ? style.cateringBHover : style.cateringB} onMouseEnter={() => this.hoverOn("cat")} onMouseLeave={() => this.hoverOff("cat")} onClick={() => this.clickOn("cat")}/>
                    </div>
                </div>
                <div className={style.containerOverlay}>
                    <div className={style.row}>
                        <div className={style.bandText} onMouseEnter={() => this.hoverOn("marching")} onMouseLeave={() => this.hoverOff("marching")} onClick={() => this.clickOn("marching")}>
                            Marching Band
                        </div>
                        <div className={style.ticketText} onMouseEnter={() => this.hoverOn("ticket")} onMouseLeave={() => this.hoverOff("ticket")} onClick={() => this.clickOn("ticket")}>
                            Ticketmaster
                        </div>
                        <div className={style.cateringAText} onMouseEnter={() => this.hoverOn("cat")} onMouseLeave={() => this.hoverOff("cat")} onClick={() => this.clickOn("cat")}>
                            Stampede Catering
                        </div>
                        <div className={style.cateringBText} onMouseEnter={() => this.hoverOn("cat")} onMouseLeave={() => this.hoverOff("cat")} onClick={() => this.clickOn("cat")}>
                            Stampede Catering
                        </div>
                        <div className={style.xaText} onMouseEnter={() => this.hoverOn("xa")} onMouseLeave={() => this.hoverOff("xa")} onClick={() => this.clickOn("xa")}>
                            Xa. Security
                        </div>
                    </div>
                </div>
                <ModalComp company={this.state.company} visible={this.state.visible} hideModal={this.hideModal.bind(this)}/>

            </div>
        );
    }
}