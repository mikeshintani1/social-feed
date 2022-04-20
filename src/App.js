import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import Post from './Components/Post/Post';
import logo from './logo.svg';
import './App.css';

function App() {

  const [post, setPost] = useState([{name: 'Bob Biggums'}, {post: 'I like pie!'}])

  function addNewPost(post){

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
          <DisplayEntries parentEntries ={entries} />
          </div>
          <div className='border-box'>
          <AddEntryForm addNewPostProperty={addNewPost}/>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='border-box'>
            <EntriesChartTracker parentEntries ={entries}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;