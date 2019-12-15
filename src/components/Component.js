import React, { useState, useEffect } from 'react';

export default function Component(props){
    const [contributors, setContributors] = useState( [] );
    const [count, setCount] = useState(5);
    // const data;
    const  urlConstributors  =  props.location.state.data.contributors_url;
    const arrayMyJson = [];

    // function handleConstriborators(){
        useEffect(() => {
            fetch(urlConstributors).then((response) => {
                // console.log(response);
                return response.json();
                // return <h1>Algo que poner</h1>;
              }).then((myJson) => {
                
                // console.log(myJson);
                // console.log(myJson[1]);
                for (var i=0; i<count; i++){
                  arrayMyJson.push(myJson[i]);
                  // setContributors(myJson[i]);
                }
                setContributors(arrayMyJson);
                console.log(arrayMyJson); 

            });
        }, []);

        function CountAndFetch(){
          fetch(urlConstributors).then((response) => {
            // console.log(response);
            return response.json();
            // return <h1>Algo que poner</h1>;
          }).then((myJson) => {
            
            // console.log(myJson);
            // console.log(myJson[1]);
            for (var i=0; i<count+5; i++){
              arrayMyJson.push(myJson[i]);
              // setContributors(myJson[i]);
            }
            setContributors(arrayMyJson);
            setCount(count+5);
            console.log(arrayMyJson); 

        });
        // this.forceUpdate();
        }

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

          {/* {console.log(contributors)} */}
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
            <button onClick={CountAndFetch}> + Load More</button>
            {console.log(count)}
        </div>
        
      );

}