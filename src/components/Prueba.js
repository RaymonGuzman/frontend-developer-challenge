import React from 'react';



function Prueba({ data }) {
    //    console.log({data})

    return (
        data.map((data, i) => {
            return (
                <ul>
                <li>{data.id}</li>
                <li>{data.name}</li>
                </ul>
            )
        })
    )

}

export default Prueba;

