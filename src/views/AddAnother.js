import { useState } from 'react';
import { Form, Button, Col } from "react-bootstrap";
import EmailInput from '../components/EmailInput';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SubmitData", names);
    }
    
    return (
            <Form>
                
                <EmailInput label="Email" placeholder="Enter Email" note="I'm going to send this to everyone" />

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
                    <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                </div>
            </Form>
    )
}



    


