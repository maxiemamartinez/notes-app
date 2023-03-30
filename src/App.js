import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
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
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};
export default App;
