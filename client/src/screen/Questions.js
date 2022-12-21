import { QuestionCard } from "../components/QuestionCard";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Button, Dropdown, DropdownButton, Spinner } from "react-bootstrap";
import SearchBar from "../components/SearchBar";

export function Questions({ setID }) {
    const [questions, setQuesitons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [test, setTest] = useState('test');
    const [searcnInput, setSearchInput] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [searchOutPut, setSearchOutPut] = useState([]);


    async function getAllQuestions() {
        try {
            const data = await axios.get('/api/allposts');
            setQuesitons(data.data)
            setLoading(false);

        } catch (error) {
            console.log(error)
        }
    }

    function handleSelect(e) {
        // console.log(e);
        setTest(e.target.value)
    }


    useEffect(() => {
        getAllQuestions();
    }, [])

    const getsearch = async () => {
        try {
            setLoading(true);
            const data  = await axios.get('/api/allposts/search', { searcnInput });
            setLoading(false);
            setSearchOutPut(data.data);
            setShowSearch(true);
            
            //Test
            console.log(data)
            console.log(searcnInput)

        } catch (error) {
            console.log(error)

        }
    }

    const listQuestions = questions.map((question) => <QuestionCard
        difficulty={question.difficulty} language={question.language}
        author={question.author} _id={question._id}
        title={question.title} description={question.description}
        setID={setID}
    />)
    const listSearch = searchOutPut.map((question) => <QuestionCard
        difficulty={question.difficulty} language={question.language}
        author={question.author} _id={question._id}
        title={question.title} description={question.description}
        setID={setID}
    />)

    return (
        <div className="questions">
            <div className="searchItems">
                <SearchBar setSearchInput={setSearchInput} />
                <div>
                    <i class="fas fa-search " onClick={getsearch}></i>
                </div>
            </div>
            <div style={{ float: 'right' }} className="filter">
                <div className="wrapper mt-2">
                    <Dropdown.Menu className="difficultyBtn" onChange={(e) => setTest(e.target.value)} >
                        <Dropdown.Header>Difficulty</Dropdown.Header>
                        <Dropdown.Item>Easy</Dropdown.Item>
                        <Dropdown.Item>Medium</Dropdown.Item>
                        <Dropdown.Item>Hard</Dropdown.Item>
                    </Dropdown.Menu>

                    {/* <Dropdown className="d-inline mx-2" >
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                            Default Dropdown
                        </Dropdown.Toggle>

                        <Dropdown.Menu  onSelect={handleSelect}>
                            <Dropdown.Item href="#" >Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}


                    <DropdownButton title='Language' className="language" >
                        <Dropdown.Item eventKey="option-1">Python</Dropdown.Item>
                        <Dropdown.Item eventKey="option-2">Javascript</Dropdown.Item>
                        <Dropdown.Item eventKey="option-3">C++</Dropdown.Item>
                    </DropdownButton>
                </div>

            </div>
            <h1 className="mt-5 mb-3">Leet Code Programming Solutions</h1>
            <p>{test}</p>

            {
                showSearch === false && (loading ? <Spinner animation="border" role="status" /> :
                    listQuestions)
            }
            {
                showSearch === true && (
                    loading ? <Spinner animation="border" role="status" /> : listSearch)
            }

        </div>
    )
}