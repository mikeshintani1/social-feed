import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import CustomButton from './Components/CustomButton/CustomButton';
import NameForm from './Components/Post/NameForm';
import './App.css';

function App() {

  const [entries, setEntries] = useState([{name:' Bob Biggums', post: 'i like pie'}])

  function addNewPost(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (

    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social Feed</h3>
        <div className='col-md-6'>
          <div className='border-box'>       
           <NameForm addNewPostProperty={addNewPost}/>
          </div>
        <div>
      <div className='col-md-6'>
        <div className='border-box'>
          <DisplayPost parentPosts ={entries} />
          </div>
        <div>
      </div>
    </div>
      </div>
    </div>
    </div>
  </div>
  );
  }
export default App