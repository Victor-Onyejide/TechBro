import { Alert, Badge, Button, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export function Question() {
    const [question, setQuesiton] = useState();
    const [message, setMessage] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const isUserAuthenticated = useSelector(state => state.auth.isUserAuthenticated);

    console.log("Id",id)
    console.log({isUserAuthenticated});

    async function getQuestion() {
        try {
            if (id !== '') {
                const question = await axios.get(`/api/${id}`);
                setLoading(false)
                setQuesiton(question.data);
                console.log(question);
            }
        } catch (error) {
            console.log(error.message)

        }
    }

    async function deletePost() {
        try {
            const deletedPost = await axios.delete(`/api/${id}`)
            setMessage(deletedPost.data.message)
            console.log(deletedPost.data)
        } catch (error) {
            setMessage(error.message)
            setError(true)
            console.log(error)
        }
    }

    useEffect(() => {
        getQuestion()

    }, [])

    return (
        <div className="myquestion mt-5">
            {
                loading ? <Spinner animation="border" role="status" /> : <div className="questionScreen">
                    <div className="questions-links mb-3">
                        <Link to="/questions" ><i className="fas fa-arrow-circle-left"></i></Link>
                    </div>
                    <div className="header">

                        <h1>{question?.title}</h1>
                        <a href={question.url} rel="noreferrer" target="_blank">
                            <Badge bg="warning" className="leetcode" style={{ color: "black" }}>LeetCode</Badge>
                        </a>
                    </div>
                    <p className="mt-3">
                        {question?.description}
                    </p>
                    <div className="mysolution mt-5 position-relative">
                        <h2 className="">Solution</h2>
                        <div className="qbadge position-absolute">

                            <Badge bg="danger" >{question?.language}</Badge>
                        </div>
                    </div>
                    <div className="code mt-2 position-relative">
                        <i className="copy fas fa-copy"></i>
                        <pre>
                            <code>
                                {question?.solution}
                            </code>
                        </pre>
                    </div>
                    {/* Use REdux */}
                    <div className="position-relative ">
                        <div className="editOrDelete mt-2" >
                            <Link to="/question/edit">
                                <Button variant="success">Edit</Button>
                            </Link>
                            <Button variant="danger" onClick={deletePost}>Delete</Button>
                        </div>
                    </div>
                    <Badge className="mt-3 mb-5" style={{ fontSize: "1rem" }}>By {question?.author}</Badge>
                    {message &&
                        <div>
                            <Alert variant="success">{message}</Alert>
                        </div>
                    }

                    {error &&
                        <div>
                            <Alert variant="danger">{message}</Alert>
                        </div>
                    }

                </div>
            }


        </div>
    )
}