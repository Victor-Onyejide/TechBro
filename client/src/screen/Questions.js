import { QuestionCard } from "../components/QuestionCard";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Button, Dropdown, DropdownButton, Spinner } from "react-bootstrap";
import SearchBar from "../components/SearchBar";

export function Questions({ setID }) {
    const [questions, setQuesitons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [test, setTest] = useState('test');


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
        <div className="questions">
            <div className="searchItems">
                <SearchBar />
                <div>
                    <i class="fas fa-search "></i>
                </div>
            </div>
            <div style={{ float: 'right' }} className="filter">
                <div className="wrapper mt-2">
                    <Dropdown.Menu className="difficultyBtn" onChange={(e) => setTest(e.target.value)}>
                        <Dropdown.Item>Easy</Dropdown.Item>
                        <Dropdown.Item>Medium</Dropdown.Item>
                        <Dropdown.Item>Hard</Dropdown.Item>
                    </Dropdown.Menu>

                    <Dropdown className="d-inline mx-2" >
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                            Default Dropdown
                        </Dropdown.Toggle>

                        <Dropdown.Menu >
                            <Dropdown.Item href="#" onClick={(e) => setTest(e.target.value)}>Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    <DropdownButton title='Language' className="language" onChange={(e) => setTest(e.target.value)}>
                        <Dropdown.Item>Python</Dropdown.Item>
                        <Dropdown.Item>Javascript</Dropdown.Item>
                        <Dropdown.Item>C++</Dropdown.Item>
                    </DropdownButton>
                </div>

            </div>
            <h1 className="mt-5 mb-3">Leet Code Programming Solutions</h1>
            <p>{test}</p>

            {
                loading ? <Spinner animation="border" role="status" /> :
                    listQuestions
            }

        </div>
    )
}