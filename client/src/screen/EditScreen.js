import { Alert, Button, Form } from "react-bootstrap"
import { useEffect, useState } from 'react'
import axios from 'axios';
export function EditScreen({ id }) {
    const [question, setQuesiton] = useState({});
    const [author, setAuthor] = useState(question.author);
    const [title, setTitle] = useState(question.title);
    const [solution, setCode] = useState(question.solution);
    const [language, setLanguage] = useState(question.language);
    const [description, setDescription] = useState(question.description);
    const [url, setUrl] = useState(question.url);
    const [difficulty, setDifficulty] = useState(question.difficulty);

    const [success, setSuccess] = useState();
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    async function getQuestion() {
        try {
            const data = await axios.get(`/api/${id}`);
            setQuesiton(data.data);
        } catch (error) {
            console.log(error.message);
            // setMessage(error.message)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setShowMessage(true);
        try {
            const data = await axios.patch(`/api/${id}`,
                {
                    author, title, solution,
                    language, description,
                    url, difficulty
                })
            console.log(data.data)
            setSuccess(true)
            setMessage(data.data.message)

        } catch (error) {
            console.log(error)
            setSuccess(false)
            setMessage(error.message)

        }
    }
    useEffect(() => {
        getQuestion();
    }, [])
    return (
        <>
            <h1 className="mt-5">Edit Mock Interview Session</h1>
            <Form className="h-100 mt-1" onSubmit={handleSubmit}>
                <Form.Label >Author:</Form.Label>
                <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />

                <Form.Label className="mt-3">Question Title:</Form.Label>
                <Form.Control type="text" placeholder={question.title} onChange={(e) => setTitle(e.target.value)} />

                <Form.Label className="mt-3" >Url:</Form.Label>
                <Form.Control type="text" placeholder={question.url} onChange={(e) => setUrl(e.target.value)} />

                <Form.Label className="mt-3">Description:</Form.Label>
                <Form.Control as="textarea" placeholder={question.description} onChange={(e) => setDescription(e.target.value)} rows={3} />

                <Form.Label className="mt-3">Programming Language:</Form.Label>
                <Form.Select onClick={(e) => setLanguage(e.target.value)} placeholder={question.language} >
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
                <Form.Select onClick={(e) => setDifficulty(e.target.value)} placeholder={question.difficulty} >
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </Form.Select>

                <Form.Label className="mt-3">Solution:</Form.Label>
                <Form.Control as="textarea" placeholder={question.solution} onChange={(e) => setCode(e.target.value)} rows={30} />
                <Button type="submit" className="mt-3" >Submit</Button>
            </Form>
            {
                showMessage && (success ? <Alert variant="success" className="mt-3">{message}</Alert> : <Alert variant="danger" className="mt-3">{message}</Alert>)
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