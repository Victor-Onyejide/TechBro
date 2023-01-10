import { QuestionCard } from "../components/QuestionCard";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Button, Dropdown, DropdownButton, Spinner } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import FilterTag from "../components/FilterTag";

export function Questions({ setID }) {
    const [questions, setQuesitons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searcnInput, setSearchInput] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [searchOutPut, setSearchOutPut] = useState([]);
    const [filterDiff, setFilterDiff] = useState('');
    const [filterLang, setFilterLang] = useState('');

    // const [searchTag, setSearchTag] = useState('');
    const [difficultyTag, setDifficultyTag] = useState('');
    const [languageTag, setLanguageTag] = useState('');
    const [showFilterTags, setShowFilterTags] = useState(false);

    async function getAllQuestions() {
        try {
            const data = await axios.get('/api/allposts');
            setQuesitons(data.data)
            setLoading(false);

        } catch (error) {
            console.log(error)
        }
    }

    // function handleSelect(e) {
    //     // console.log(e);
    //     // setTest(e.target.value)
    // }


    useEffect(() => {
        getAllQuestions();
    }, [])

    useEffect(() => {
        if (searcnInput === "") {
            setShowSearch(false);
            setSearchOutPut([]);
        }
    }, [searcnInput])

    // Use Effect for filter

    useEffect(() => {
        // setSearchTag(searcnInput)
        setDifficultyTag(filterDiff)
        setLanguageTag(filterLang)
    }, [searcnInput, filterDiff, filterLang])

    const getsearch = async () => {
        const diff = filterDiff ? filterDiff : null;
        const lang = filterLang ? filterLang : null;

        // Test
        // console.log("Difficulty: ", diff)
        // console.log("Language: ", lang)

        try {
            setLoading(true);
            const { data } = await axios.post('/api/allposts/search', { searcnInput, diff, lang });
            setLoading(false);
            setSearchOutPut(data);
            setShowSearch(true);

            //Test
            // console.log(data)
            // console.log(searcnInput)

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
            <div className="search-wrapper">
                <div className="searchItems">
                    <SearchBar setSearchInput={setSearchInput} />
                    <div>
                        <i class="fas fa-search " onClick={getsearch}></i>
                    </div>
                </div>
                <div className="filter-tag mt-3">
                    <div className="wrapper">
                        {
                            showFilterTags && <>

                                {/* { searchTag !== '' ? <FilterTag title={searchTag} /> : <></> } */}
                                {difficultyTag !== '' ? <FilterTag 
                                    title={difficultyTag}
                                    setTag={setDifficultyTag}
                                    setFilter={setFilterDiff}
                                    
                                    

                                /> : <></>}
                                {languageTag !== '' ? <FilterTag 
                                    title={languageTag}
                                    setFilter={setFilterLang}
                                    setTag={setLanguageTag} /> : <></>}
                                <span className="search-txt" onClick={getsearch}><strong>Search</strong></span>
                                <span className="clear-txt">Clear All</span>
                            </>
                        }


                    </div>

                </div>
                <div style={{ float: 'right' }} className="filter">
                    <div className="wrapper mt-2">
                        <Dropdown onSelect={(e) => setFilterDiff(e)} onClick={() => setShowFilterTags(true)}>
                            <Dropdown.Toggle>
                                Difficulty
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="Easy">Easy</Dropdown.Item>
                                <Dropdown.Item eventKey="Medium">Medium</Dropdown.Item>
                                <Dropdown.Item eventKey="Hard">Hard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown onSelect={(e) => setFilterLang(e)} onClick={() => setShowFilterTags(true)}>
                            <Dropdown.Toggle>
                                Language
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="Python">Python</Dropdown.Item>
                                <Dropdown.Item eventKey="Javascript">Javascript</Dropdown.Item>
                                <Dropdown.Item eventKey="Java">Java</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </div>

            </div>

            <h1 className="mt-5 mb-3">Leet Code Programming Solutions</h1>

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