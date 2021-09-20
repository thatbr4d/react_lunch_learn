import { useState } from "react";
import { Button } from "react-bootstrap";
import FormExtreme from "../components/FormExtreme";
import TableExtreme from "../components/TableExtreme";

export default function AddAnotherExtreme() {
    const [formData, setformData] = useState([{}])

    const addAnother = (e) => {
        e.preventDefault();
        setformData([...formData, {}]);
    }

    return (
        <div>

            {
                formData.map((item, index) => (
                    <div key={index}>
                        <TableExtreme />
                        <FormExtreme />
                    </div>
                ))
            }

            <Button variant="primary" onClick={addAnother} >Add Another</Button>
        </div>
    )
}
