import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Prueba from './Prueba';


export default function Center(props) {
  const [name, setName] = useState('');
  const [data, setData] = useState();

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleFecth(e) {
    e.preventDefault();
    // alert('This is the '+ name)
    const url = `https://api.github.com/search/repositories?q=${name}`;
    console.log(url);
    fetch(url).then((response) => {
      console.log(response);
      return response.json();
    }).then((myJson) => {
     // console.log(myJson.items);
     setData(myJson.items);
     console.log(data);
     //sleep(5000);
     
    });
   // console.log({data});
    // Center.push("/prueba");
    // return <Prueba />;
  }


  //Function to sleep
  // function sleep(milliseconds) {
  //   let timeStart = new Date().getTime();
  //   while (true) {
  //     let elapsedTime = new Date().getTime() - timeStart;
  //     if (elapsedTime > milliseconds) {
  //       break;
  //     }
  //   }
  // } 


  return (
    
    <form onSubmit={handleFecth}>
      <label>
        Repository:
        <input type="text" name="name" value={name} onChange={handleNameChange} />
      </label>
      <input type="submit" value="Submit" />
      {/* <Link to="/prueba"><input type="submit" value="Submit" /></Link> */}
      {data ? <Prueba data={data}/> : ''}
    </form>
    

  );
}



