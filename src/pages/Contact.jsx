import React from 'react';

const Contact = () => {
    return ( 
        <div className="container">

        <div className="row">

            <div className="col-sm-12">

                <div className="jumbotron shadow-lg">
                    <h2>Hello! Let's work together.</h2>
                    <hr noshade/>

                    <form> 

                        <div className="form-group">
                            <label className="form-txt" for="exampleInputEmail1">Name</label>
                            <input type="name" className="form-control form-input" id="name" aria-describedby="emailHelp"/>
                        </div>

                        <div className="form-group">
                            <label className="form-txt" for="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control form-input" id="email"
                                aria-describedby="emailHelp"/>
                        </div>

                        <div className="form-group">
                            <label className="form-txt" for="exampleInputMessage1">Message</label>
                            <textarea type="text" className="form-control form-input" id="message" rows="3"></textarea>
                        </div>

                        <div className="form-group form-check">
                        </div>

                        <button id="submitBtn" type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </div>
        </div>

    </div>
     );
}
 
export default Contact;