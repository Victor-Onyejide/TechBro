import { QuestionCard } from "../components/QuestionCard";
import axios from 'axios';
import { useState, useEffect } from "react";

export function Questions({setID}) {
    const[questions, setQuesitons] = useState([]);


    async function getAllQuestions () {
        try {
            const data = await axios.get('/api/allposts');
            console.log(data.data)
            setQuesitons(data.data)
            console.log(questions)
    
        } catch (error) {
            console.log(error)
        }
    }

    // const listQuestions = questions.map()

    useEffect(() => {
        getAllQuestions();
    }, [])

    const listQuestions = questions.map((question)=><QuestionCard
    difficulty={question.difficulty} language={question.language}
     author= {question.author} _id ={question._id}
      title= {question.title} description = {question.description}
      setID= {setID}
    />)
    return (
        <>
            <h1 className="mt-5 mb-3">Leet Code Programming Solutions</h1>
            {
                listQuestions
            }


        </>
    )
}