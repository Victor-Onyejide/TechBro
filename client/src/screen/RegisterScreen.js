import { useState } from "react";
import {  Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [password, setPassWord] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPass, setConfirmPass] = useState('')

    return (
        <>
            <Form className="login-wrapper mt-5">
            <h1>Register</h1>

                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" onChange={(e) => setName(e.target.value)} />

                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} />
                
                <Form.Label>Password:</Form.Label>
                <Form.Control type="text" onChange={(e) => setPassWord(e.target.value)} />

                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="text" onChange={(e) => setConfirmPass(e.target.value)} />
                <Button type="submit" className="mt-3" style={{width:'100%'}}>Register</Button>
                <Link to="/login" className="mb-5">Already a member?Login</Link>
            </Form>
        </>
    )
}