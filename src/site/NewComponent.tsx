type NewComponentType = {
    students: Array<SatudentType>
}
type SatudentType = {
    id: number,
    name: string,
    age: number
}
export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((objectFromStudentsArray, index)=>{
                return (
                    <li key={objectFromStudentsArray.id}>
                        <span>{objectFromStudentsArray.name}</span>
                        <span> age: {objectFromStudentsArray.age}</span>
                    </li>
            )
            })}
        </ul>
    )
}