import { Form } from "react-bootstrap";

export default function EmailInput({label, placeholder, note}) {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control type="email" placeholder={placeholder} />
            <Form.Text muted>{note}</Form.Text>
        </Form.Group>
    )
}
