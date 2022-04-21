import React, { useState } from 'react';
import './NameForm.css'

const NameForm = (props) => {
    const [firstName, setFirstName]= useState('');

    const [postComment, setPostComment] = useState('');

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        alert(`Name: ${firstName}`);
        alert(`Comment Post: ${postComment}`);

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' onChange={(event) => setFirstName(event.target.value)}value={firstName}/>
            <button type='onClick'>Post Comment!</button>
        <form onSubmit={handleSubmit}>
            <label>Post Comment</label>
            <input type='text' onChange={(event) => setPostComment(event.target.value)}value={postComment}/>
        </form></form>
    );

}


export default NameForm;

