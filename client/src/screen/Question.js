import { Alert, Badge, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from 'axios';

export function Question({ id }) {
    const [question, setQuesiton] = useState();
    const [message, setMessage] = useState();
    const [error, setError] = useState();
    async function getQuestion() {
        try {
            const question = await axios.get(`/api/${id}`);
            setQuesiton(question.data);
            console.log(question);
        } catch (error) {
            console.log(error.message)

        }
    }

    async function deletePost() {
        try {
            const deletedPost = await axios.patch(`/api/${id}`)
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

    // useEffect(()=>{
    //     deletePost()
    // },[deletePost])
    return (
        <div className="my question mt-5">
            <h1>{question?.title}</h1>
            <p className="mt-3">
                {question?.description}
            </p>
            <div className="mysolution mt-5 position-relative">
                <h2 className="">Solution</h2>
                <Badge bg="danger" className="qbadge position-absolute">{question?.language}</Badge>
            </div>
            <div className="code mt-2 position-relative">
                <i class="copy fas fa-copy"></i>
                <pre>
                    <code>
                        {question?.solution}
                    </code>
                </pre>
            </div>
            <Badge className="mt-3 mb-5" style={{ fontSize: "1rem" }}>By {question?.author}</Badge>

            <div className="editOrDelete mb-5" >
                <Button variant="success">Edit</Button>
                <Button variant="danger" onClick={deletePost}>Delete</Button>
            </div>
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
    )
}