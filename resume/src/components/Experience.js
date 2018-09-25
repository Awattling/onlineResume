import React from "react";
import style from "../css/Experience.css";
export class Experience extends React.Component{
    constructor(props){
       super(props);
        this.state = {
            catHover: false,
            ticketHover: false,
            bandHover: false,
            xaHover: false,
        }
    }
    hoverOnCat(){
        this.setState({
            catHover: true,
        });
    }
    hoverOffCat(){
        this.setState({
            catHover: false,
        });
    }
    hoverOnTicket(){
        this.setState({
            ticketHover: true,
        });
    }
    hoverOffTicket(){
        this.setState({
            ticketHover: false,
        });
    }
    hoverOnBand(){
        this.setState({
            bandHover: true,
        });
    }
    hoverOffBand(){
        this.setState({
            bandHover: false,
        });
    }
    hoverOnXa(){
        this.setState({
            xaHover: true,
        });
    }
    hoverOffXa(){
        this.setState({
            xaHover: false,
        });
    }
    render(){
        return(
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.year}>
                            <h1>2018</h1>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.year}>
                            <h1>2017</h1>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.year}>
                            <h1>2016</h1>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.year}>
                            <h1>2015</h1>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.year}>
                            <h1>2014</h1>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.year}>
                            <h1>2013 - 1995</h1>
                        </div>
                    </div>
                </div>
                <div className={style.containerOverlay}>
                    <div className={style.row}>
                        <div className={this.state.bandHover ? style.bandHover : style.band} onMouseEnter={this.hoverOnBand.bind(this)} onMouseLeave={this.hoverOffBand.bind(this)}/>
                        <div className={this.state.ticketHover ? style.ticketmasterHover : style.ticketmaster} onMouseEnter={this.hoverOnTicket.bind(this)} onMouseLeave={this.hoverOffTicket.bind(this)}/>
                        <div className={this.state.xaHover ? style.xaHover : style.xa}  onMouseEnter={this.hoverOnXa.bind(this)} onMouseLeave={this.hoverOffXa.bind(this)}/>
                        <div className={this.state.catHover ? style.cateringAHover : style.cateringA} onMouseEnter={this.hoverOnCat.bind(this)} onMouseLeave={this.hoverOffCat.bind(this)}/>
                        <div className={this.state.catHover ? style.cateringBHover : style.cateringB} onMouseEnter={this.hoverOnCat.bind(this)} onMouseLeave={this.hoverOffCat.bind(this)}/>
                    </div>
                </div>
                <div className={style.containerOverlay}>
                    <div className={style.row}>
                        <div className={style.bandText} onMouseEnter={this.hoverOnBand.bind(this)} onMouseLeave={this.hoverOffBand.bind(this)}>
                            Marching Band
                        </div>
                        <div className={style.ticketText} onMouseEnter={this.hoverOnTicket.bind(this)} onMouseLeave={this.hoverOffTicket.bind(this)}>
                            Ticketmaster
                        </div>
                        <div className={style.cateringAText} onMouseEnter={this.hoverOnCat.bind(this)} onMouseLeave={this.hoverOffCat.bind(this)}>
                            Stampede Catering
                        </div>
                        <div className={style.cateringBText} onMouseEnter={this.hoverOnCat.bind(this)} onMouseLeave={this.hoverOffCat.bind(this)}>
                            Stampede Catering
                        </div>
                        <div className={style.xaText} onMouseEnter={this.hoverOnXa.bind(this)} onMouseLeave={this.hoverOffXa.bind(this)}>
                            Xa. Security
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}