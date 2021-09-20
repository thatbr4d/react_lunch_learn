import { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import EmailInput from '../components/EmailInput';

export default function HideShow() {
    const [isVisibleFName, setVisibleFName] = useState(true);
    const [isVisibleLName, setVisibleLName] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Form>

            <EmailInput label="Email" placeholder="Enter Email" note="I'm going to send this to everyone" />

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

            {
                isVisibleLName ?
                    <Form.Group className="mb-3 mt-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group> :
                    null
            }

            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check inline label="Show" name="group1" type={type} id={`inline-${type}-1`} onClick={() => setVisibleLName(true)} />
                    <Form.Check inline label="Hide" name="group1" type={type} id={`inline-${type}-2`} onClick={() => setVisibleLName(false)} />
                </div>
            ))}



            <div className="mt-5">
                <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
            </div>
        </Form>
    )
}
