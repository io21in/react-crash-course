import { Link, Form, redirect } from 'react-router-dom';
import PropTypes from 'prop-types'; // 이렇게 정확하게 추가해야 합니다.
import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost() {

  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button> {/* button 태그의 기본 타입은 submit */}
        </p>
      </Form>
    </Modal>
  );
}
// PropTypes를 사용하여 prop 타입을 정의합니다.
NewPost.propTypes = {
  onAddPost: PropTypes.func.isRequired // 함수 타입이며 필수적으로 전달되어야 함을 명시합니다.
};

export default NewPost;

export async function action ({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // {body: '...', author: '...'}
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
        'Content-Type': 'application/json'
    }
  });

  return redirect('/');
}