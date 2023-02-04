import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import DiffTag from "./DiffTag";

export function QuestionCard({ difficulty, language, author, _id, title, description, setID }) {

    return (
        <>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/question" id={_id} onClick={() => setID(_id)}>
                <Card className="mycard mb-3 position-relative" style={{ width: '100%' }}>
                    {/* <div className="difficulty">{difficulty}</div> */}
                    <DiffTag className="difficulty" difficulty={difficulty} />

                    <Card.Body  className="body-wrapper">
                        <div className="mb-3">
                            <Card.Title className="font-weight-bold">{title}</Card.Title>
                            <Card.Text className="desc">
                                {description}
                            </Card.Text>
                        </div>
                        <Badge>{author}</Badge>
                        <span className="lang">{language}</span>
                    </Card.Body>
                </Card>

            </Link>



        </>
    )
}