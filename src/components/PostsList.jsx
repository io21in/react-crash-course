import PropTypes from 'prop-types'; // 이렇게 정확하게 추가해야 합니다.
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './Modal';
import { useState, useEffect } from 'react';

function PostsList({isPosting, onStopPosting}){  

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {    
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            setPosts(resData.posts);
          }

          fetchPosts();
    }, []);

   
    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
                </Modal>
            )}
            {posts.length > 0 && (           
                <ul className={classes.posts }>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>
            )} 
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}
// PropTypes를 사용하여 prop 타입을 정의합니다.
PostsList.propTypes = {
    isPosting: PropTypes.bool.isRequired,  // 함수 타입이며 필수적으로 전달되어야 함을 명시합니다.
    onStopPosting: PropTypes.func.isRequired
  };

export default PostsList;