import React, { useEffect, useState } from 'react';
import ListCast from './components/ListCast';
import Modals from './components/Modals';
import Nav from './components/Nav';
import "./App.scss";

function App() {

  const name='StarGazers';
  return (
    <article>
      <hgroup>
      <img src="images/group.svg" alt="Star Gazers" />
      <h1>Meet the <i>{name}</i> </h1>
      <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <button className='outline' onClick={()=>alert('Hellooo')}>Click Me</button>
      </hgroup>
    </article>
  )
}
export default App
