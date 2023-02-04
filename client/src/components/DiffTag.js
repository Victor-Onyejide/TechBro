import styled from 'styled-components';

const Tag = styled.div`
color: ${props => props.difficulty === 'Easy' ? 'green': 
props.difficulty === 'Medium'? 'yellow' :
props.difficulty === 'Hard' ? 'red': 'green'
};
border: 1px solid ${props => props.difficulty === 'Easy' ? 'green': 
props.difficulty === 'Medium'? 'yellow' :
props.difficulty === 'Hard' ? 'red': 'green'
};
margin-left: 20px;
margin-top: 10px;
`

// color: ${props => props.difficulty === 'Easy' ? 'green': 
// props.difficulty === 'Medium'? 'yellow' :
// props.difficulty === 'Hard' ? 'red': 'green'
// };

export default function DiffTag({difficulty}){
    return(
        <Tag className="difficulty" difficulty={difficulty}>{difficulty}</Tag>
    )
}