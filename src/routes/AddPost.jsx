import { Modal } from 'bootstrap';
import classes from './AddPost.module.css';
import classes from '../components/Modal/Modal';
import { useState } from 'react';
function AddPost({ openDialog, onAddPost }) {
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');

    function setDescriptionHandler(event) {
        setDescription(event.target.value);
    }
    function setAuthorHandler(event) {
        setAuthor(event.target.value);
    }
    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            description: description,
            author: author
        }
        onAddPost(postData);
        openDialog();
    }

    return (
        <Modal>
        <div className={classes.main}>
            <h1>Add Post</h1>
            <form className={classes.form} onSubmit={submitHandler}>
                <input type='text' required onChange={setAuthorHandler}></input>
                <textarea required onChange={setDescriptionHandler}></textarea>
                <button type='submit'>add</button>
                <button type='button' onClick={openDialog}>cancel</button>
            </form>
        </div>
        </Modal>
    );
}
export default AddPost;