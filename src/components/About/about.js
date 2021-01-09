import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function About(props) {
    return (
        <div className="container padding">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-3 mb-2 bg-info text-white">
                    <h1 className="display-4">About Me</h1>
                </div>
            </div>

            <hr></hr>

            <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12" >
                <img src="Assets/Images/choyo.jpg" className="img-fluid" alt="Me at Hase temple in Kamakura" />
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 float-md-left">
                    <p>
                        Hi I’m Choyo Matsuta. I currently live in south bay area of California.
                        I was born and raised in Japan. My first language is Japanese. I came to the US to study business and accounting.
                        I graduated from Cal State Fullerton in 2008 with BA in Accounting.
                    </p>
                    <br></br>
                    <p>
                        My current work position is a Sr. ERP consultant and also be the assistant manager.
                        My specialty is business application system consulting. Understanding customer/users' needs and deliver what they expected or advance their expectation with technical solution.
                        Also, I am closely working with developers to provide them with the system design, architecture, and functions required for each project and support.
                    </p>
                    <br></br>
                    <p>
                        Currently I'm attending UC Reverside extension class to learn coding skills. Within this pandemic situation this year, I think online business is very important and crucial to many businesses and industries.
                        I would like to advance my knowledge and skills to expand my carrier fields to consult and provide reasonable solution and proactive information to the companies, and also to be able to acknowledge technical issues and needs properly and efficiently.
                        Although I do not consider to be a web developer, improving my technical skills would be important for my success carrier path.
                    </p>
                </div>
            </div>

            <br></br>
            
            <div className="row">
                <div className="text-center col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 float-md-left">
                    <p>
                        <strong>My Contact Information:</strong><br></br>
                        <i className="fas fa-mobile"></i> 714-875-7913 <br></br>
                        <i className="fas fa-envelope-square"></i> choyo@anime-topia.com<br></br>
                        <a href="https://github.com/cmatsuta" alt="github" target="_blank"><i className="fab fa-github-alt"></i> GitHub</a><br></br>
                        <a href="https://www.linkedin.com/in/choyo-matsuta/" alt="LinkedIn" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a> <br></br>
                        <a href="Assets/pdf/ChoyoMatsuta_resume.pdf" alt="Resume PDF" target="_blank"><i className="fas fa-file-pdf"></i> Resume PDF</a>
					</p>
            </div>
        </div>  
    </div>
    );
}

export default About;