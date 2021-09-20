import { Table } from "react-bootstrap";

export default function TableExtreme() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Option 1</th>
                    <th>Option 2</th>
                    <th>Option 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>One</td>
                    <td>Option</td>
                    <td>Thing</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Two</td>
                    <td>Option</td>
                    <td>Thing</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">The best option</td>
                    <td>Thing</td>
                </tr>
            </tbody>
        </Table>
    )
}
