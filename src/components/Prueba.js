import React from 'react';



function Prueba({ data }) {

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
                {/* <li>{data.}</li> */}
                </ul>

                </div>
            )
        })
    )

}

export default Prueba;

