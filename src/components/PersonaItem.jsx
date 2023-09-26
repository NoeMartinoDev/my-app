import React from 'react';

const PersonaItem = (props) => {
    return (
        <div>
            <p>Nombre: {props.name}</p>
            <p>Edad: {props.age}</p>
            <hr></hr>
        </div>
    )
}

// class PersonaItem extends React.Component {
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return(
//             <div>
//                 <p>Nombre: {this.props.name}</p>
//                 <p>Edad: {this.props.age}</p>
//                 <hr></hr>
//             </div>
//         )
//     }
// }

export default PersonaItem;