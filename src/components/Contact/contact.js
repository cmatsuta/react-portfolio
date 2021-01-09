import React from 'react';
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact(props) {
    return (
                <form>
                    <div className="form-group">
                        <label for="validationServer01">Name</label>
                        <input type="text" className="form-control is-valid" id="validationServer01" value="Name" required></input>
                            <div className="valid-feedback">
                                Please enter your name
                            </div>
                    </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <small id="emailHelp" className="form-text text-muted">Please enter your email address.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalbutton">Submit</button>
                            <div className="modal fade" id="modalbutton" tabindex="- 1" role="dialog" aria-labelledby="modalbutton" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLongTitle"> Information Submitted </h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="false"> × </span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <p> Thank you for your message.</p> 
                                            <p>
                                            </p> 
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal"> Close </button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                </form>
    );
}

export default Contact;