import { useState } from 'react';
import { Form, Button, Col } from "react-bootstrap";

export default function AddAnother() {
    const [names, setNames] = useState([
        {firstName: ''}
    ])
    
    const handleChangeInput = (index, event) => {
        const values = [...names];
        values[index]["firstName"] = event.target.value;
        setNames(values);
    }

    const addAnother = () => {
        setNames([...names, { firstName: ''}]);
    }
    
    return (
        <Col lg="auto" className="mt-5">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text muted>I'm going to send this to everyone</Form.Text>
                </Form.Group>

                {
                    names.map((name, index) => (
                        <Form.Group className="mb-3" key={index}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" value={name.firstName} onChange={event => handleChangeInput(index, event)} />
                        </Form.Group>
                    ))
                }

                <div>
                    <Button variant="secondary" onClick={() => addAnother()}>Add Another</Button>
                </div>
                <div className="mt-5">
                    <Button variant="primary" type="submit">Submit</Button>
                </div>
            </Form>
        </Col>
    )
}



    


