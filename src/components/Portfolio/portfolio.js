import React from 'react';
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact(props) {
    return (
        <div className="container">

            <div className="row">

        <figure className="col-md-6 position-relative gallery-img">
                    <img src="Assets/Images/SafetyFirstApp.png" alt="Safety First Travel Advisor" className="img-fluid figure-image gallery-img"></img>
                        <hr></hr>
                            <figcaption className="col-12 img-caption no-gutter position-absolute">
                                <a href="https://cmatsuta.github.io/project1/" alt="Safety First App" target="_blank" className="row btn btn-secondary btn-lg btn-block active img-caption no-gutter" role="button" id="img-btn">Safety-First</a>
                            </figcaption>
        </figure>

        <figure className="col-md-6 position-relative gallery-img">
                    <img src="Assets/Images/workinprogress.png" alt="Work In Progress" className="img-fluid figure-image gallery-img"></img>
                        <hr></hr>
                            <figcaption className="col-12 img-caption no-gutter position-absolute">
                                <a href="https://mecc-project2.herokuapp.com/" alt="Work in Progress App" target="_blank" className="row btn btn-secondary btn-lg btn-block active img-caption no-gutter" role="button" id="img-btn">Work in Progress</a>
                                </figcaption>
                        </figure>

        <figure className="col-md-6 position-relative gallery-img">
                    <img src="Assets/Images/weather-dashboard.png" alt="Weather Dashboard" className="img-fluid figure-image gallery-img"></img>
                        <figcaption className="col-12 img-caption no-gutter position-absolute">
                            <a href="https://cmatsuta.github.io/weather-dashboard/" alt="Weather Dashboard App" target="_blank" className="row btn btn-secondary btn-lg btn-block active img-caption no-gutter" role="button" id="img-btn">Weather Dashboard</a>
                            </figcaption>
        </figure>

        <figure className="col-md-6 position-relative gallery-img">
                    <img src="Assets/Images/workday-scheduler.png" alt="Workday Scheduler" className="img-fluid figure-image gallery-img"></img>
                        <figcaption className="col-12 img-caption no-gutter position-absolute">
                            <a href="https://cmatsuta.github.io/workdayschedule/" alt="Workday Scheduler App" target="_blank" className="row btn btn-secondary btn-lg btn-block active img-caption no-gutter" role="button" id="img-btn">Workday Scheduler</a>
                        </figcaption>
        </figure>

        <figure className="col-md-6 position-relative gallery-img">
                    <img src="Assets/Images/password-generator.png" alt="Password Generator" target="_blank" className="img-fluid figure-image gallery-img"></img>
                        <figcaption className="col-12 img-caption no-gutter position-absolute">
                            <a href="https://cmatsuta.github.io/passwordgenerator/" alt="Password Generator App" target="_blank" className="row btn btn-secondary btn-lg btn-block active img-caption no-gutter" role="button" id="img-btn">Password Generator</a>
                        </figcaption>
        </figure>

        </div>

        </div>

    );
}

export default Contact;