import PropTypes from 'prop-types'; // 이렇게 정확하게 추가해야 합니다.
import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './Modal';

function PostsList({isPosting, onStopPosting}){
    const [enteredBody, setEnteredBody]=useState('');
    const [enteredAuthor, setEnteredAuthor]=useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }
    function authorChangeHandler(event) {   
        setEnteredAuthor(event.target.value);
    }
    
    return (
        <>
        {isPosting && (
        <Modal onClose={onStopPosting}>
            <NewPost 
                onBodyChange={bodyChangeHandler} 
                onAuthorChange={authorChangeHandler} 
                onCancel={onStopPosting}
            />
        </Modal>
        )}
            
            <ul className={classes.posts }>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Manuel" body="Checkout the full course!" />
            </ul>
        </>
    );
}
// PropTypes를 사용하여 prop 타입을 정의합니다.
PostsList.propTypes = {
    isPosting: PropTypes.func.isRequired,  // 함수 타입이며 필수적으로 전달되어야 함을 명시합니다.
    onStopPosting: PropTypes.func.isRequired
  };

export default PostsList;