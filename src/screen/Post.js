import { Button, Form } from "react-bootstrap"
import { useState } from 'react'
export function Post({setDes, setTestCode}) {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('');
    const [description, setDescription] = useState('');
    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.values)
        setDes(description)
        setTestCode(code)
    }
    return (
        <>
            <h1 className="mt-5">Mock Interview Session</h1>
            <Form className="h-100 mt-1" onSubmit={handleSubmit}>
                <Form.Label >Author:</Form.Label>
                <Form.Control type="text" onChange={(e) => setAuthor(e.target.value)} />

                <Form.Label >Question Title:</Form.Label>
                <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />

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

                <Form.Label className="mt-3">Solution:</Form.Label>
                <Form.Control as="textarea" onChange={(e) => setCode(e.target.value)} rows={30} />
                <Button type="submit" className="mt-3" >Submit</Button>
            </Form>

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