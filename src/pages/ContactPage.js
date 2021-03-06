import React from 'react';
import Hero from '../components/Hero';
import Form from 'react-bootstrap/Form';
import Content from '../components/Content';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

class ContactPage extends React.Component {

        // constructor(props) {
        //     super(props);
        //     this.state = {
        //         name: '',
        //         email: '',
        //         message: '',
        //         disabled :false,
        //         emailSent: null,

        //     }
        // }
        // handleChange = (event) => {

        //     const target = event.target;
        //     const value = target.type === 'checkbox' ? target.checked : target.value;
        //     const name = target.name;

        //     this.setState({
        //         [name]: value

        //     })
        // }

        // handleSubmit = (event) => {
        //     event.preventDefault();

        //     this.setState({
        //         disabled: true
        //     });

        //     Axios.post('http://localhost:3030/api/email', this.state)
        //         .then(res => {
        //             if(res.data.success) {
        //             this.setState({
        //                 disabled: false,
        //                 emailSent: true
        //         });
        //     } else {
        //             this.setState({
        //                 disabled: false,
        //                 emailSent: false
        //             });
        //         }
        //     })
        //         .catch(err => {
        //             this.setState({
        //                 disabled: false,
        //                 emailSent: false
        //             });
        //         })
            
        // }

    render() {
        return(
            <div>
                <Hero title={this.props.title} subTitle={this.props.subTitle}/>

                <Content>
                    {/* <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>} 
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email not Sent</p>}

                    </Form> */}
                    <p>Email me at <strong>mattesonkellie@gmail.com</strong></p>
                    <p>Find me on <a href="https://www.linkedin.com/in/kelliematteson/">LinkedIn</a></p>
                    <p>Follow me on <a href="https://github.com/kelliematteson">GitHub</a></p>
                    {/* <a href="../assets/documents/kelliematteson_fullstackdevResume-1.pdf"download>maybe?</a> */}
                    
                </Content>
            </div>
        
        );

}
}

export default ContactPage;