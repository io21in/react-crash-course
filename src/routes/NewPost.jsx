import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // 이렇게 정확하게 추가해야 합니다.
import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost({onAddPost}) {
  const [enteredBody, setEnteredBody]=useState('');
  const [enteredAuthor, setEnteredAuthor]=useState('');

  function bodyChangeHandler(event) {
      setEnteredBody(event.target.value)
  }

  function authorChangeHandler(event) {   
      setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
      event.preventDefault();
      const postData = {
        body: enteredBody,
        author: enteredAuthor
      };
      onAddPost(postData);      
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={authorChangeHandler}/>
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button> {/* button 태그의 기본 타입은 submit */}
        </p>
      </form>
    </Modal>
  );
}
// PropTypes를 사용하여 prop 타입을 정의합니다.
NewPost.propTypes = {
  onAddPost: PropTypes.func.isRequired // 함수 타입이며 필수적으로 전달되어야 함을 명시합니다.
};

export default NewPost;