import { Button, Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function QuestionCard() {

    return (
        <>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/question">
                <Card className="mycard mb-3 position-relative" style={{ width: '100%' }}>
                    <Card.Body  >
                        <Card.Title className="font-weight-bold">Check if Every Row and Column Contains All Numbers</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Badge>Victor Onyejide</Badge>
                        <span className="lang">Javascript</span>
                    </Card.Body>
                </Card>

            </Link>



        </>
    )
}