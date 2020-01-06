import React, { useState, useEffect } from 'react';
import component from "./css/component.module.css";

// import { url } from 'inspector';

export default function Component(props){
    const [contributors, setContributors] = useState( [] );
    const [count, setCount] = useState(10);
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
        <body>

        
        <section className={component.cards}>

          {/* {console.log(contributors)} */}
          {contributors.map(item => (
            <div className={component.externalContributor}>
            <div className={component.internalContributor} style={{background: `url(${item.avatar_url}) no-repeat`, height:"400px", backgroundSize:"300px 300px"}}>
            <ul>
            <li key={item.id}>
              <a href={item.node_id}>{item.login}</a>
            </li>
            <li>
              <a href={item.html_url}> Profile </a>
            </li>
            {/* <li>
              <img src={item.avatar_url}></img>
            </li> */}
            <li>
              {item.contributions}
            </li>
            </ul>
            </div>
            </div>
          ))}
            {console.log(count)}
        </section>
            <button onClick={CountAndFetch}> + Load More</button>
        </body>
      );

}