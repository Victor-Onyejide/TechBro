import { Alert, Button, Form } from "react-bootstrap"
import { useState } from 'react'
import axios from 'axios';
export function Post({ setDes, setTestCode }) {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [solution, setCode] = useState('');
    const [language, setLanguage] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const [success, setSuccess] = useState();
    const [error, setError] = useState('');
    const [showMessage, setShowMessage] = useState();

    async function handleSubmit(e) {
        e.preventDefault()
        setShowMessage(true);
        try {
            const data = await axios.post(`/api/post`, { author, title, solution, language, description, url, difficulty })
            console.log(data.data)
            setSuccess(true)
        } catch (error) {
            console.log(error)
            setSuccess(false)
            setError(error.message)

        }
    }
    return (
        <>
            <h1 className="mt-5">Mock Interview Session</h1>
            <Form className="h-100 mt-1" onSubmit={handleSubmit}>
                <Form.Label >Author:</Form.Label>
                <Form.Control type="text" onChange={(e) => setAuthor(e.target.value)} />

                <Form.Label className="mt-3">Question Title:</Form.Label>
                <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />

                <Form.Label className="mt-3" >Url:</Form.Label>
                <Form.Control type="text" onChange={(e) => setUrl(e.target.value)} />

                <Form.Label className="mt-3">Description:</Form.Label>
                <Form.Control as="textarea" onChange={(e) => setDescription(e.target.value)} rows={3} />

                <Form.Label className="mt-3">Programming Language:</Form.Label>
                <Form.Select onClick={(e) => setLanguage(e.target.value)} placeholder="asdc">
                    <option>Java</option>
                    <option>Javascript</option>
                    <option>Python</option>
                    <option>Typescript</option>
                    <option>C</option>
                    <option>C++</option>
                    <option>C#</option>
                    <option>Other</option>
                </Form.Select>

                <Form.Label className="mt-3">Difficulty:</Form.Label>
                <Form.Select onClick={(e) => setDifficulty(e.target.value)} placeholder="asdc">
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </Form.Select>

                <Form.Label className="mt-3">Solution:</Form.Label>
                <Form.Control as="textarea" onChange={(e) => setCode(e.target.value)} rows={30} />
                <Button type="submit" className="mt-3" >Submit</Button>
            </Form>
            {
                showMessage && (success ? <Alert variant="success" className="mt-3">Submited</Alert> : <Alert variant="danger" className="mt-3">{error}</Alert>)
            }

            {/* <div className="result mt-5 h-100">
                <h1> {title}</h1>
                <div>{language}</div>
                <pre>

                </pre>

                <pre>
                    <code style={{ height: "1000px" }}>{code}</code>
                </pre>
            </div> */}
        </>
    )
}