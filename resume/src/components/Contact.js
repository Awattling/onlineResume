import React from "react";
import style from "../css/Contact.css";
import git from "../media/gitMarkWhite.png";
import pdf from "../media/resume.pdf";
export class Contact extends React.Component{
    render(){
        return(
            <div>
                <div className={style.wrapper}>
                    <div className={style.needWork}>
                        At this time I am currently looking for employment and would love to be contacted about any opportunities within the technology field.
                    </div>
                    <div className={style.if}>
                        If you have such opportunity?
                    </div>
                    <div className={style.resume}>
                        <a href={pdf} target="-_blank" className={style.link}> Check out my resume </a>
                    </div>
                    <div className={style.git}>
                        Also checkout my Github for most recent projects and skills
                    </div>
                    <div className={style.git}>
                        <a href={"https://github.com/Awattling"}>
                            <img src={git} className={style.gitMark} alt={"Github"} title={"Check out my Github"}/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}