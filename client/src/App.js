import { Container } from "react-bootstrap"
import { useState } from 'react'
import { Post } from "./screen/Post";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Questions } from "./screen/Questions";
import { Question } from "./screen/Question";
import { EditScreen } from "./screen/EditScreen";
import LogInScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  const [des, setDes] = useState('');
  const [testCode, setTestCode] = useState('');
  const [id, setID] = useState('');
  return (
      <Provider store={store}>
        <Container >
          <NavBar />
          <Routes>
            <Route path="/post" element={<Post setDes={setDes} setTestCode={setTestCode} />} />
            <Route path="/questions" element={<Questions setID={setID} />} />
            <Route path="/question/:id" element={<Question id={id} />} />
            <Route path="/question/edit" element={<EditScreen id={id} />} />
            <Route path="/login" element={<LogInScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
          </Routes>
        </Container>
      </Provider>

  );
}

export default App;
