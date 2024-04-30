import PropTypes from 'prop-types'; // 이렇게 정확하게 추가해야 합니다.
import classes from './Post.module.css'

function Post({author, body}) {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </li>
    );
}
// PropTypes를 사용하여 prop 타입을 정의합니다.
Post.propTypes = {
    author: PropTypes.string.isRequired,  // 함수 타입이며 필수적으로 전달되어야 함을 명시합니다.
    body: PropTypes.string.isRequired,  // 마찬가지로 함수 타입이며 필수적입니다.
  };

export default Post;