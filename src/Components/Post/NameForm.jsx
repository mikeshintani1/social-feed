import React, { useState } from 'react';
import './NameForm.css'


const NameForm = (props) => {
    const [postName, setName]= useState('');
    const [postComment, setPostComment] = useState('');

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        let newEntry = {
            name: postName,
            comment: postComment
        };
        props.addNewPostProperty(newEntry)
        alert(`Name: ${postName}`);
        alert(`Comment Post: ${postComment}`);

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' onChange={(event) => setName(event.target.value)}value={postName}/>
            <button type='onClick'>Post Comment!</button>
        <form onSubmit={handleSubmit}>
            <label>Post Comment</label>
            <input type='text' onChange={(event) => setPostComment(event.target.value)}value={postComment}/>
        </form>
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                {/* <label>Name</label> */}
                {/* <input type='text' className='form-control' value={postName} onChange = {(event) => setName(parseFloat(event.target.value))}/>  */}
            </div>
            <div className='form-group'>
                {/* <label>Post</label> */}
                {/* <input type='text' className='form-control' value={postComment} onChange={(event) => setPostComment(event.target.value)}/> */}
            </div>
        </form></form>
    );

}


export default NameForm;

