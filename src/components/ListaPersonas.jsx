import React from "react";
import PersonaItem from "./PersonaItem";

function ListaPersonas(props) {
    return (
        <>
            {props.lista.map((persona, index) => <PersonaItem name={persona.name} age={persona.age} key={index}/>)}
        </>
    )
}

// class ListaPersonas extends React.Component {
//     // constructor(){

//     // }
//     render(){
//         return (
//         <>
//         <PersonaItem />
//         <PersonaItem />
//         <PersonaItem />
//         </>
//         )
//     }
// }

export default ListaPersonas;

