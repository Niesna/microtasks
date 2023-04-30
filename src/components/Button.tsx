type ButtonPropsType={
    name: string
}
export const Button=(props: ButtonPropsType)=>{
    const onClickHandler=()=>{
        console.log("I am Vasya")
    }
    return(
        <button onClick={onClickHandler}>{props.name}</button>
    )
}