import React, { useState, useEffect } from 'react';

export default function Component(props){
    const [contributors, setContributors] = useState({ hits: [] });
    // const data;
    const  urlConstributors  =  props.location.state.data.contributors_url;
    

    // function handleConstriborators(){
        useEffect(() => {
            fetch(urlConstributors).then((response) => {
                // console.log(response);
                return response.json();
                // return <h1>Algo que poner</h1>;
              }).then((myJson) => {
                // console.log(myJson);
                // console.log(myJson);
                setContributors(myJson);

            });
          }, []);

    // }
    return (

        // <div>

        //     {console.log(contributors)}
        // </div>
        <ul>
          {contributors.hits.map(item => (
            <li key={item.id}>
              <a href={item.node_id}>{item.login}</a>
            </li>
          ))}
        </ul>
      );

}