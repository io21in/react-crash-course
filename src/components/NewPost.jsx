import PropTypes from 'prop-types'; // 이렇게 정확하게 추가해야 합니다.
import classes from './NewPost.module.css';

function NewPost({onBodyChange, onAuthorChange, onCancel}) {

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button> {/* button 태그의 기본 타입은 submit */}
      </p>
    </form>
  );
}
// PropTypes를 사용하여 prop 타입을 정의합니다.
NewPost.propTypes = {
  onBodyChange: PropTypes.func.isRequired,  // 함수 타입이며 필수적으로 전달되어야 함을 명시합니다.
  onAuthorChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired  // 마찬가지로 함수 타입이며 필수적입니다.
};

export default NewPost;