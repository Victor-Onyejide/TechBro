import { Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from 'axios';

export function Question({id}) {
    const [question, setQuesiton] = useState();
    // const id = '6398b6b2afc283d1797e456e'
    async function getQuestion() {
        try {
            const question = await axios.get(`/api/${id}`);
            setQuesiton(question.data);
            console.log(question);
        } catch (error) {
            console.log(error.message)

        }


    }

    useEffect(() => {
        getQuestion()

    }, [])
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
        </div>
    )
}