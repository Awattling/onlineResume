import React from "react";
import Modal from "react-bootstrap4-modal";
import style from "../css/Modal.css";

export class ModalComp extends React.Component{
    hideModal(){
        this.props.hideModal();
    }
    render(){
        let text;
        let headText;
        let footerText;
        if(this.props.company === "ticketmaster"){
            headText = "Ticket Seller - Ticketmaster Canada";
            text = "Working as professional ticket seller in the Saddledome" +
                " for most ticketed sporting and concert events in western Canada.  " +
                "This position requires me to have strong communication skills with both" +
                " customers and fellow co-workers. Often times it involves problem solving " +
                "to determine the cause of a ticket not working or to find the best seats " +
                "given the situation the customers present.";
            footerText = "November 2016 - Current";
        }else if(this.props.company === "marching"){
            headText ="Musician";
            text = "Performing member of various ensembles around Calgary including five full" +
                " years with the internationally recognized Calgary Stampede Showband. Achieving " +
                "two world titles for marching showbands in Japan – 2013 and Brazil – 2014. Was " +
                "constantly challenged to work on achieving higher degrees of musicianship and " +
                "professionalism.  Requiring high attention to detail, advanced team work and time " +
                "management skills.  During later years was in position of leadership within the group " +
                "setting the example for future generations, solving problems, communicating with band" +
                " directors and helping ensure the efficient functioning of a team.";
            footerText = "September 2009 - August 2017"
        }else if(this.props.company === "xa"){
            headText ="Security Guard - Xa. Security Services";
            text ="Responsibilities include: Looking out for the safety of people and equipment. Providing" +
                " clear and concise communication with fellow team members and patrons. Quickly adapting " +
                "to different roles and environments given little notice. Maintaining working knowledge of" +
                " the Saddledome, McMahon Stadium, and many other locations; including some in Edmonton and" +
                " Fort McMurray.   Leading efforts of fellow team members to insure the safety of everyone at " +
                "the venue. Maintaining a calm demeanor during stressful and difficult situations.";
            footerText = "September 2014 - August 2016";
        }else if(this.props.company === "catering"){
            headText ="Catering Staff - Calgary Stampede Catering";
            text ="Working as  temporary catering staff during graduation season at the BMO center. Included " +
                "specialized staff training in order to properly set tables and carry large amounts of dishware." +
                " Was required to maintain a high degree of customer satisfaction, set and clear tables, carry heavy" +
                " loads by shoulder and occasionally direct a large number of patrons. Often required teamwork skills" +
                " and coordination with coworkers  to provide the best possible customer care and service.  ";
            footerText = "June 2016 and June 2017";
        }else{
            headText="";
            text = "";
            footerText="";
        }
        return(
            <Modal visible={this.props.visible} className={style.modalMain} onClickBackdrop={this.hideModal.bind(this)} >
                <div className={style.header}>
                    <h5>{headText}</h5>
                </div>
                <div className={style.modalBody}>
                    <p>{text}</p>
                </div>
                <div className={style.footer}>
                    {footerText}
                </div>
            </Modal>

        );
    }
}