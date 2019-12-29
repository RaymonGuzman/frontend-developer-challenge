import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function Prueba({ data }) {
    // const [collaborators, setCollaborators] = useState();

    // function handleCollaborators({collaborators}){

    //     const url= collaborators;
    //     console.log(url);

    // }

    // function handleCollaborators(e){
    //     setCollaborators(e.target.value);
    // }
    const externalBox = {
        paddingInlineStart: "2%",
        paddingInlineEnd: "2%",
        float: "inline-start"

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
        width: "100%",
        height: "50%"
        // float: "inline-start"
        /* boxSizing: "border-box" */
        // display:"inline"
    };
    //    console.log({data})

    return (
        data.map(data => {
            return(

        <div style={externalBox}>

            <div style={myStyle}>

                <ul>
                <li>{data.full_name}</li>
                <li>{data.language}</li>
                <li>{data.description}</li>
                <li>{data.open_issues_count}</li>
                <li>{data.stargazers_count}</li>

                {/* <li value={data.collaborators_url} onClick={handleCollaborators} >{data.collaborators_url}</li> */}
                
                {/* <input type="text" name="name" value={name} onChange={handleNameChange} /> */}
                </ul>
                {/* <link value={data.collaborators_url} onClick={handleCollaborators} > Collaborators </link> */}
                <Link to={{ pathname: "/component", state:{data:data} }}> Contributors </Link>
                {/* {console.log(collaborators)} */}

                </div>
        </div>
                );
            
        }
        )
    )

}

export default Prueba;

