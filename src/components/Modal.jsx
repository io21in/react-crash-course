import PropTypes from 'prop-types';
import classes from './Modal.module.css';

function Modal({children, onClose}) {
    return (<>
        <div className={classes.backdrop} onClick={onClose}/>
        <dialog open className={classes.modal}>
            {children}
        </dialog>    
    
    </>
)}
// PropTypes 정의 추가
Modal.propTypes = {
    children: PropTypes.node.isRequired, // children은 React 노드이며, 필수로 받아야 함을 의미합니다.
    onClose: PropTypes.func.isRequired  // onclose 함수도 필수입니다.
};

export default Modal;
