import { ExampleTS } from "../components/ExampleTS";

export default function Typescript() {
    
    const people = [
            {firstName: "Steve", lastName: "Rogers"},
            {firstName: "Tony", lastName: "Stark"}
        ]

    return (
        <div>
            <h1 className="mb-5">Example typescript page</h1>
            <ExampleTS id={5} people={people} />
        </div>
    )
}
