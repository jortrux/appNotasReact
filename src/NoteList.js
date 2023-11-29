import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDeleteNote, onEditNote }) => {

  return (
    <div>
      {notes.map((note, index) => (
        <div key={index} style={{ border: '1px solid #61dafb', padding: '8px' }}>
          <Note
            key={index}
            note={note}
            onDeleteNote={() => onDeleteNote(index)}
            onEditNote={(editedTitle, editedContent) => onEditNote(index, editedTitle, editedContent)}
          />
        </div>
      ))}
    </div>
  );
};

export default NoteList;
