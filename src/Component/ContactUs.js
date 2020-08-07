import React, { Component } from 'react';


class ContactUs extends Component{
    render(){
        return(
            <div>
                <h1>Contact US</h1>
                <form>
                    <div class="form-group">
                        <label>Name</label>
                        <input class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>E-mail</label>
                        <input class="form-control" type="email"/>
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <input class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Telephone</label>
                        <input class="form-control"/>
                    </div>
                        <input class="btn btn-primary form-control" value="Submit" type="submit"/>
                </form>
            </div>
        )
    }
}

export default ContactUs;
