import { MdDeleteForever } from 'react-icons/md';
import PropTypes from 'prop-types';

const Note = ({ id, text, date }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};
Note.propTypes = {
  id: PropTypes.array,
  text: PropTypes.div,
  date: PropTypes.date
};
export default Note;
