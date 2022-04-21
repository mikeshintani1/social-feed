import React, { useState } from 'react';
// import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPost/DisplayPost';
// import NameForm from './Components/NameForm/NameForm';
import './App.css';
import CustomButton from './Components/CustomButton/CustomButton';
import NameForm from './Components/Post/NameForm';


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
          <DisplayPost parentPosts ={entries} />
          </div>
          <div className='border-box'>
          {/* <CreatePost addNewPostProperty={addNewPost}/> */}
          <NameForm parentPosts= {NameForm}/>
          </div>
      </div>
        <br/>
        <h1>changing Styles on Button Click</h1>
        <br/>
        <CustomButton message="Like!"/>
        <CustomButton message="Dislike"/>
    </div>
  </div>
  );
  }
export default App