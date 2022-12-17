import { QuestionCard } from "../components/QuestionCard";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

export function Questions({ setID }) {
    const [questions, setQuesitons] = useState([]);
    const [loading, setLoading] = useState(true);


    async function getAllQuestions() {
        try {
            const data = await axios.get('/api/allposts');
            setQuesitons(data.data)
            setLoading(false);

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAllQuestions();
    }, [])

    const listQuestions = questions.map((question) => <QuestionCard
        difficulty={question.difficulty} language={question.language}
        author={question.author} _id={question._id}
        title={question.title} description={question.description}
        setID={setID}
    />)
    return (
        <>
            <h1 className="mt-5 mb-3">Leet Code Programming Solutions</h1>
            {
                loading ? <Spinner animation="border" role="status" /> :
                    listQuestions
            }


        </>
    )
}