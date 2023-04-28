type NewCarProps={
    topCars: Array<topCarsType>
}
type topCarsType={
    manufacturer:string,
    model: string
}
export const NewCar=(props: NewCarProps)=>{
    return(
        <>
            <ul>
                {props.topCars.map((objectFromTopCars)=>{
                    return (
                        <li>
                            <span>{objectFromTopCars.manufacturer}</span>
                            <span> model: {objectFromTopCars.model}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}