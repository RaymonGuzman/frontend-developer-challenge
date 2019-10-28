import React, {useState} from 'react';  

export default function Center(props){
  const [name, setName] = useState();

  const url = `https://api.github.com/search/repositories?q=${name}`;

  function handleNameChange(e){
    setName(e.target.value);
  }
  
  fetch(url).then((response)=>{
    console.log(response);
    return response.json();
  }).then((myJson)=>{
    console.log(myJson);
  });

  return(
    <section>
      <input 
      value={name}
      onChange={handleNameChange}
      />

    </section>
  );
}



