import Note from './Note';
import PropTypes from 'prop-types';
import AddNote from './AddNote';

const NotesList = ({ notes = [], handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      date: PropTypes.string,
      text: PropTypes.string,
      index: PropTypes.string
    })
  ),
  handleAddNote: PropTypes.func,
  handleDeleteNote: PropTypes.func
};
export default NotesList;
