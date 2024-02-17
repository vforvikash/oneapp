import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function ContactForm() {
    const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
    const DELAY = 1500;

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [state, setState] = useState({
                                 callback: "not fired",
                                 value: "[empty]",
                                 load: false,
                                 expired: "false"
                               });
    const _reCaptchaRef = React.createRef();

    setTimeout(() => {
          setState({ load: true, ...state });
        }, DELAY);

    function handleContactForm(e) {
       console.log('this is vikash--->', email, message, e)
       e.preventDefault();
       axios.post('/contact', {
            email,
            message
        })
        .then(response => {
            console.log('response.data', response.data)
        })
        .catch(error => {
            console.error(error);
        });
    }

    function handleChange(value) {
        console.log("Captcha value:", value);
        setState({ value,  ...state });
        // if value is null recaptcha expired
        if (value === null) setState({ expired: "true", ...state });
        console.log("Captcha state:", state);
    };

    function asyncScriptOnLoad() {
        setState({ callback: "called!", ...state });
        console.log("scriptLoad - reCaptcha Ref-", _reCaptchaRef);
    };

    return(
        <Form onSubmit={handleContactForm}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" defaultValue={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} defaultValue={message} onChange={e => setMessage(e.target.value)} />
            </Form.Group>
            <ReCAPTCHA
                style={{ display: "inline-block" }}
                theme="light"
                ref={_reCaptchaRef}
                sitekey={TEST_SITE_KEY}
                onChange={handleChange}
                asyncScriptOnLoad={asyncScriptOnLoad}
              />
            <Button as="input" type="submit" value="Submit" />
        </Form>
    );
}
