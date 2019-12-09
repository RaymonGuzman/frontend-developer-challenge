import React, { useState, useEffect } from 'react';

export default function Component(props){
    const [contributors, setContributors] = useState( [] );
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
                console.log(myJson);
                setContributors(myJson);

            });
          }, []);

    // }
    return (

        // <div>

        //     {console.log(contributors)}
        // </div>
      // <div>
      //   {
        
      //   contributors.forEach(function(item) {
      //     console.log(item);
      //     })
          
      //   }
      // </div>
        <div>

          {contributors.map(item => (
            <ul>
            <li key={item.id}>
              <a href={item.node_id}>{item.login}</a>
            </li>
            <li>
              <a href={item.html_url}> Profile </a>
            </li>
            <li>
              <img src={item.avatar_url}></img>
            </li>
            <li>
              {item.contributions}
            </li>
            </ul>
          ))}
        </div>
        
      );

}