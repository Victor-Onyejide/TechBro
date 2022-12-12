import { Container } from "react-bootstrap"
import { useState } from 'react'
import { Post } from "./screen/Post";
import {Routes, Route} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Questions } from "./screen/Questions";
import { Question } from "./screen/Question";

function App() {
  const [des, setDes] = useState('');
  const [testCode, setTestCode] = useState ('');
  return (
    <>
      <Container >
        <NavBar />
        <Routes>
          <Route path="/post" element={<Post setDes={setDes} setTestCode={setTestCode} />}/>
          <Route path="/questions" element={<Questions />}/>
          <Route path="/question" element={<Question des={des} testCode={testCode} />}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
