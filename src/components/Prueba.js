import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import prueba from "./css/prueba.module.css";
// import './css/mobile.css';

function Prueba({ data }) {
    // const [collaborators, setCollaborators] = useState();

    // function handleCollaborators({collaborators}){

    //     const url= collaborators;
    //     console.log(url);

    // }

    // function handleCollaborators(e){
    //     setCollaborators(e.target.value);
    // }
    // const externalBox = {
    //     paddingInlineStart: "4%",
    //     // paddingInlineEnd: "1%",
    //     float: "inline-start",
    //     width: "45%",

    // }

    const myStyle = {
        backgroundImage:"-webkit-linear-gradient(top, #333333, #000000)",
        color:"white",
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: "3px",
        borderStyle: "solid",
        borderRadius: "10px",
        whiteSpace: "pre",
        boxSizing: "border-box"
        // width: "100%",
        // height: "50%"
        // float: "inline-start"
        /* boxSizing: "border-box" */
        // display:"inline"
    };
    //    console.log({data})

    return (
        data.map(data => {
            return(

        <div className={prueba.externalBox}>

            <div style={myStyle}>

                <h2>{data.full_name}</h2>
                <p>{data.language}</p>
                <h3>{data.description}</h3>
                <p>{data.open_issues_count}</p>
                <p>{data.stargazers_count}</p>

                {/* <li value={data.collaborators_url} onClick={handleCollaborators} >{data.collaborators_url}</li> */}
                
                {/* <input type="text" name="name" value={name} onChange={handleNameChange} /> */}
                {/* <link value={data.collaborators_url} onClick={handleCollaborators} > Collaborators </link> */}
                <Link to={{ pathname: "/component", state:{data:data} }}>Top Contributors </Link>
                {/* {console.log(collaborators)} */}

                </div>
        </div>
                );
            
        }
        )
    )

}

export default Prueba;

