import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Hola, soy Maxi y esta es mi primer nota',
      date: '30/03/2023'
    },
    {
      id: nanoid(),
      text: 'Hola, soy Maxi y esta es mi segunda nota',
      date: '30/03/2023'
    },
    {
      id: nanoid(),
      text: 'Hola, soy Maxi y esta es mi tercera nota',
      date: '30/03/2023'
    },
    {
      id: nanoid(),
      text: 'Hola, soy Maxi y esta es mi cuarta nota',
      date: '30/03/2023'
    },
    {
      id: nanoid(),
      text: 'Hola, soy Maxi y esta es mi quinta nota',
      date: '30/03/2023'
    }
  ]);

  const [searchText, setSearchText] = useState('');

  const addNote = (text) => {
    //console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
    </div>
  );
};
export default App;
