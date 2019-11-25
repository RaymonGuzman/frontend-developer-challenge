import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function Prueba({ data }) {
    const [collaborators, setCollaborators] = useState();

    // function handleCollaborators({collaborators}){

    //     const url= collaborators;
    //     console.log(url);

    // }

    function handleCollaborators(e){
        setCollaborators(e.target.value);
    }


    const myStyle = {
        backgroundImage:"-webkit-linear-gradient(top, #333333, #000000)",
        color:"white",
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: "3px",
        borderStyle: "solid",
        borderRadius: "10px",
        whiteSpace: "pre",
        boxSizing: "border-box",
        width: "25%",
        height: "20%"
    };
    //    console.log({data})

    return (
        
        data.map((data, i) => {
            return (
                <div style={myStyle}>

                <ul>
                <li>{data.id}</li>
                <li>{data.name}</li>
                <li>{data.language}</li>
                {/* <li value={data.collaborators_url} onClick={handleCollaborators} >{data.collaborators_url}</li> */}
                
                {/* <input type="text" name="name" value={name} onChange={handleNameChange} /> */}
                {console.log(collaborators)}
                </ul>
                {/* <link value={data.collaborators_url} onClick={handleCollaborators} > Collaborators </link> */}
                <button value={data.collaborators_url} onClick={handleCollaborators} > Collaborators </button>

                </div>
            )
        })
    )

}

export default Prueba;

