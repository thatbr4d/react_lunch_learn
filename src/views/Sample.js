import { Form, Button, Col } from "react-bootstrap";

export default function Sample() {
    return (
        <Col lg="auto" className="mt-5">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text muted>I'm going to send this to everyone</Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Col>
    )
}
