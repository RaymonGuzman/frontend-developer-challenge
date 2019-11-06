import React, { useState } from 'react';

export default function Center(props) {
  const [name, setName] = useState('');

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
      console.log(myJson);
    });
  }


  return (

    <form onSubmit={handleFecth}>
      <label>
        Repository:
        <input type="text" name="name" value={name} onChange={handleNameChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}



