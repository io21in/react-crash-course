import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className={classes.button} >
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}
// PropTypes를 사용하여 prop 타입을 정의합니다. 
MainHeader.propTypes = {
    onCreatePost: PropTypes.func.isRequired,  // 함수 타입이며 필수적으로 전달되어야 함을 명시합니다.
 };

export default MainHeader;