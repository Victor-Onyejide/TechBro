import axios from "axios";
import { useState } from "react";
import {  Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { registerUser } from "../apicalls/users";

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [password, setPassWord] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPass, setConfirmPass] = useState('')

    const onSubmit = async  (values) => {
        try {
            const res = await axios.post('/api/users/register', {name, password, email});
            // work on error message
            if(res.success) {
                console.log(res.data.message)
            }else {
                console.log(res.data.message)

            }
        }
        catch (error) {
            
            console.log(error.message)

        }
    }

    return (
        <>
            <Form className="login-wrapper mt-5" onSubmit={onSubmit}>
            <h1>Register</h1>

                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" onChange={(e) => setName(e.target.value)} />

                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} />
                
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" onChange={(e) => setPassWord(e.target.value)} />

                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="password" onChange={(e) => setConfirmPass(e.target.value)} />
                <Button type="submit" className="mt-3" style={{width:'100%'}}>Register</Button>
                <Link to="/login" className="mb-5">Already a member?Login</Link>
            </Form>
        </>
    )
}