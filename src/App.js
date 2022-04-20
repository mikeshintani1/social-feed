import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPost/DisplayPost';

import './App.css';
import CustomButton from './Components/CustomButton/CustomButton';


function App() {

const [entries, setEntries] = useState([{name:' Bob Biggums', post: 'i like pie'}])

  function addNewPost(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (

    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social
        <small className="text-muted">Feed</small></h3>
        <div className='col-md-6'>
          <div className='border-box'>
          <DisplayPost parentPosts ={entries} />
          </div>
          <div className='border-box'>
          <CreatePost addNewPostProperty={addNewPost}/>
          </div>
      </div>
        <br/>
        <h1>changing Styles on Button Click</h1>
        <br/>
        <CustomButton message="Click Me!"/>
    </div>
  </div>
  );
  }
export default App