import Note from './Note';
import PropTypes from 'prop-types';
import AddNote from './AddNote';
const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note} id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote />
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array
};

export default NotesList;
