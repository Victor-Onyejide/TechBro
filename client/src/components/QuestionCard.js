import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function QuestionCard({difficulty, language, author, _id, title, description, setID }) {

    return (
        <>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/question" id={_id} onClick={()=>setID(_id)}>
                <Card className="mycard mb-3 position-relative" style={{ width: '100%' }}>
                <div className="difficulty">{difficulty}</div>

                    <Card.Body  >
                        <Card.Title className="font-weight-bold">{title}</Card.Title>
                        <Card.Text>
                           {description}
                        </Card.Text>
                        <Badge>{author}</Badge>
                        <span className="lang">{language}</span>
                    </Card.Body>
                </Card>

            </Link>



        </>
    )
}