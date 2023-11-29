import React, { useState } from 'react';

const NoteEditor = ({ onAddNote }) => {
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  // const [editingNote, setEditingNote] = useState(null);

  const addNote = () => {
    //prefiero permitir que se creen notas vacias o notas sin titulo, a qui se quitaria ese obstaculo, pero prefiero dejarlo asi
    // if (newNote.title.trim() !== '' && newNote.content.trim() !== '') {
      onAddNote(newNote);
      setNewNote({ title: '', content: '' });
    // }
  };

  //text area de titulo y contenido cuando añades una nota
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} id="addNote">
    <input
      type="text"
      value={newNote.title}
      onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
      placeholder="Título"
    />
    <textarea
      value={newNote.content}
      onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
      placeholder="Contenido"
    />
    <button onClick={addNote}>Agregar Nota</button>
  </div>
  );
};

export default NoteEditor;