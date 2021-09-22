
interface Person{
    firstName: string;
    lastName: string;
}

interface Props{
    id: number;
    people: Person[];
}

export const ExampleTS: React.FC<Props> = ({id, people}) => {
    return (
        <div>
            <p>Some Number: {id}</p>
            {
                people.map((person: Person) => (
                    <div>
                        <p>FirstName: {person.firstName}</p>
                        <p>LastName: {person.lastName}</p>
                    </div>
                ))
            }
        </div>
    );
}
