import React from "react";
import style from "../css/Skills.css";
import diamond1 from "../media/diamond1.png";
import diamond2 from "../media/diamond2.png";
import diamond3 from "../media/diamond3.png";
import java from "../media/java.png";
import python from "../media/python.png";
import csharp from "../media/csharp.png";
import left from "../media/arrowLeft.png";
import git from "../media/git.png";
import gitHub from "../media/gitMark.png";
import na from "../media/na.png";
import html from "../media/html.png";
import css from "../media/css.png";
import javascript from "../media/js.png";
import sql from "../media/sql.png";
import comp from "../media/comp.png";
import eclipse from "../media/eclipse.png"

export class Skills extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            components: ["oo", "git", "html", "misc"],
            component: "oo",
            index: 0,
        };
        console.log(this.state.component);
    }
    leftClick = () => {
        let num = this.state.index - 1;
        if(num < 0){
            num = this.state.components.length -1 ;
        }
        this.setState({
            index: num,
            component: this.state.components[num],
        });
    };
    rightClick = () => {
        let num = this.state.index + 1;
        if(num > this.state.components.length - 1){
            num = 0;
        }
        console.log(num);
        this.setState({
            index: num,
            component: this.state.components[num],
        });
        console.log(this.state.component);
    };

    render(){
        let img1;
        let img2;
        let img3;
        let text;
        if(this.state.component === "oo"){
            img3 = csharp;
            img2 = python;
            img1= java;
            text = "My favorite languages to work within are high level object orientated languages. As such, I have gained some " +
                "advanced knowledge within Java and Python. In Java I have gone through some in-depth concepts such as serialization" +
                " and reflection as well as spending some time studying the Java compiler. I have also dabbled within C# and intend" +
                " to spend more time refining my skills in this language.";
        }else if(this.state.component === "git"){
            img3 = na;
            img2 = gitHub;
            img1= git;
            text = "During my university studies I was assigned group work and collaboration projects. This forced me into learning version control " +
                " systems. I learned how to use GIT to accommodate group work and utilized github as resource to host projects. After learning" +
                " these systems I will never look back to the days where I could not roll back to previous iterations, manage code conflicts nicely or have a team work" +
                " on one code base simultaneously. ";
        }else if(this.state.component === "html"){
            img3 = javascript;
            img2 = css;
            img1= html;
            text = "Javascript, HTML and CSS are the fundamentals of web development. Fortunately I have lots of experience in these languages as well as experience in many" +
                " other web technologies such Node, PHP, Bootstrap, JQuery and React. ";
        }else if(this.state.component === "misc"){
            img3 = eclipse;
            img2 = comp;
            img1= sql;
            text = "In the course of my studies I was exposed to a fluid mix of everything. One of the most important things I picked up was the use of relational databases and SQL." +
                " I also took time to study the inner workings on the compiler and build my own small compiler. This really helped me in understanding how programming languages work. " +
                " In order to improve my work I adopted the use of many integrated development environments such as Eclipse, WebStorm and Visual Studio. " ;
        }
        return(
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.outline}>
                        <div className={style.row}>
                            <div className={style.col}>
                                <div className={style.imgHelper}/>
                                <img className={style.arrowL} src={left} alt={""} onClick={this.leftClick.bind(this)}/>
                            </div>
                            <div className={style.mainContent}>
                                <div className={style.row}>
                                    <div className={style.left}>
                                        <div className={style.over}>
                                            <img className={style.logo} src={img3} alt={""}/>
                                        </div>
                                        <div className={style.under}>
                                            <img className={style.diamond} src={diamond3} alt={""}/>
                                        </div>
                                    </div>
                                    <div className={style.middle}>
                                        <div className={style.over}>
                                            <img className={style.logo} src={img1} alt={""}/>
                                        </div>
                                        <div className={style.under}>
                                            <img className={style.diamond} src={diamond1} alt={""}/>
                                        </div>
                                    </div>
                                    <div className={style.right}>
                                        <div className={style.over}>
                                            <img className={style.logo} src={img2} alt={""}/>
                                        </div>
                                        <div className={style.under}>
                                            <img className={style.diamond} src={diamond2} alt={""}/>
                                        </div>
                                    </div>
                                </div>
                               <div className={style.row}>
                                   <div className={style.text}>
                                       {text}
                                   </div>
                                </div>
                            </div>
                            <div className={style.col}>
                                <div className={style.imgHelper}/>
                                <img className={style.arrowR} src={left} alt={""} onClick={this.rightClick.bind(this)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}