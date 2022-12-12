import { Badge } from "react-bootstrap";

export function Question({ testCode }) {

    return (
        <div className="my question mt-5">
            <h1>Check if Every Row and Column Contains All Numbers</h1>
            <p className="mt-3">
                An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).
                Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.
            </p>
            <div className="mysolution mt-5 position-relative">
                <h2 className="">Solution</h2>
                <Badge bg="danger"  className="qbadge position-absolute">Javascript</Badge>
            </div>
            <div className="code mt-2 position-relative">
                <i class="copy fas fa-copy"></i>
                <pre>
                    <code>
                        {testCode}
                    </code>
                </pre>
            </div>
            <Badge className="mt-3 mb-5" style={{ fontSize: "1rem" }}>By Victor Onyejide</Badge>
        </div>
    )
}