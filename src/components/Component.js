import React, { useState } from 'react';

export default function Component(props){
    const [contributors, setContributors] = useState('');

    const  urlConstributors  =  props.location.state.data.contributors_url;

    // function handleConstriborators(){
        fetch(urlConstributors).then((response) => {
            // console.log(response);
            return response.json();
            // return <h1>Algo que poner</h1>;
          }).then((myJson) => {
           console.log(myJson);
        //    setContributors(myJson);
        //    console.log(myJson.id);
        //    setData(myJson.items);
        //   //  console.log(data);
        //    //sleep(5000);
           
        //   });
        });
    // }
    return (
        <h1>Probando</h1>
        // <div>
        //     <h1>
        //     {console.log(contributors)}
        //     </h1>
        
        // </div>
        // <div>


        // <h1> Prueba del siguiente componente</h1>
        // {console.log(urlConstributors)}
        
        // </div>
    );

}