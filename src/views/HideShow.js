import { useState } from 'react';
import { Form, Button, Col } from "react-bootstrap";

export default function HideShow() {
    const [isVisibleFName, setVisibleFName] = useState(true);
    
    return (
        <Col lg="auto" className="mt-5">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text muted>I'm going to send this to everyone</Form.Text>
                </Form.Group>

                { 
                    isVisibleFName ? 
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group> :
                    null
                }

                <div>
                    <Button variant="secondary" onClick={() => setVisibleFName(!isVisibleFName)}>Show/Hide</Button>
                </div>
                <div className="mt-5">
                    <Button variant="primary" type="submit">Submit</Button>
                </div>
            </Form>
        </Col>
    )
}
