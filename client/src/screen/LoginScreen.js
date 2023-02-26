import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store";

export default function LogInScreen() {
    const [email, setUser] = useState('');
    const [password, setPassWord] = useState('');
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/users/login', { email, password });
            // work on error message
            if (!res.data || !res.data.success) {
                throw new Error();
            }
            
            console.log(res.data) 
            console.log(res.data.message)

            dispatch(login(res.data.userName));
            localStorage.setItem("token", res.data)

        }
        catch (error) {
            // you can add a toast saying login wasn't successful 
            console.log(error.message)
        }
        // console.log("Submited")
    }
    return (
        <>
            <Form className="login-wrapper mt-5" onSubmit={onSubmit}>
                <h1>Log In</h1>
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" onChange={(e) => setUser(e.target.value)} />

                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" onChange={(e) => setPassWord(e.target.value)} />
                <Button type="submit" className="mt-3" style={{ width: '100%' }} >LogIn</Button>
                <Link to="/register" className="mb-5">Not a member?Register</Link>


            </Form>
        </>
    )
}