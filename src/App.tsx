import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./site/NewComponent";
import {NewCar} from "./site/NewCar";
import {Button} from "./components/Button";


function App() {
    // const students =[
    //         {id: 1, name: "James", age: 8},
    //         {id: 2, name: "Robert", age: 18},
    //         {id: 3, name: "John", age: 28},
    //         {id: 4, name: "Michael", age: 38},
    //         {id: 5, name: "William", age: 48},
    //         {id: 6, name: "David", age: 58},
    //         {id: 7, name: "Richard", age: 68},
    //         {id: 8, name: "Joseph", age: 78},
    //         {id: 9, name: "Thomas", age: 88},
    //         {id: 10, name: "Charles", age: 98},
    //         {id: 11, name: "Christopher", age: 100},
    //     ]
    // const topCars = [
    //     {manufacturer:'BMW', model:'m5cs'},
    //     {manufacturer:'Mercedes', model:'e63s'},
    //     {manufacturer:'Audi', model:'rs6'}
    // ]
// const myFirstSubscriber = (event:React.MouseEvent<HTMLButtonElement>)=>{
//     console.log("Hello, I am Vasya!")
// }
// const mySecondSuscriber=(event:React.MouseEvent<HTMLButtonElement>)=>{
// //         console.log("Hello, I am Ivan!")
// }
// const onClickHandler =(name:string) => {
//     console.log(name)
// }
//     const foo1=()=>{
//         //ничего не нужно передавать
//         console.log(100200)
//     }
//     const foo2=(name: number)=>{
//         // передать цифру 100200
//         console.log(name)
//     }
    return (
        <>
           {/*<Header title={"NEW BODY"}/>*/}
           {/* <Body titleForBody={"New Text"}/>*/}
           {/* <Footer titleForFooter={"New Footer"}/>*/}
           {/* <NewComponent students={students}/>*/}
           {/* <NewCar topCars={topCars}/>*/}
           {/* <button onClick={(event)=>{console.log("Hello")}}>MyYoutubeChanel-1</button>*/}
           {/* <button onClick={(event:React.MouseEvent<HTMLButtonElement>)=>onClickHandler("Vasya")}>MyYoutubeChanel-1</button>*/}
           {/* <button onClick={(event:React.MouseEvent<HTMLButtonElement>)=>onClickHandler ("Ivan")}>MyYoutubeChanel-2</button>*/}
           {/* <button onClick={()=>onClickHandler("someinfo")}>MyYoutubeChanel-2</button>*/}
           {/* <button onClick={foo1}>1</button>*/}
           {/* <button onClick={()=>foo2(100200)}>2</button>*/}
            <Button name={"MyYoutubeChanel-1"}/>
            <Button name={"MyYoutubeChanel-2"}/>
        </>
    );
}

export default App;
