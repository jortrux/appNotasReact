//referencias:
//https://upmostly.com/tutorials/react-onchange-events-with-examples#add-onchange-handler-input
//chatGPT (para principalmente escritura en local, y algunas funciones)
//apuntes de clase
//https://github.com/rpmaya/u-tad-Web/tree/main/react
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
import './App.css';

import React, { useState } from 'react';
import NoteList from './NoteList.js';
import NoteEditor from './NoteEditor.js';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, search] = useState('');

  //para añadir notas
  const addNote = (newNote) => {
    //recordar que los puntos suspensivos estan desempaquetando los elementos del array para el futuro
    //si, estos comentarios son para mi
    setNotes([...notes, newNote]);
  };

  //para eliminar notas
  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    //splice cambia un n cantidad de elementos en la posicion n
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    //en este caso, con el index de la lista de notes elimino el elemento de la posicion del index, y luego sobre escribo la lista
  };

  //para editar notas
  const editNote = (index, editedTitle, editedContent) => {
    //con el titulo y el contenido leido en Note.js actualizo los valores de la lista a los nuevos leidos ahi
    const updatedNotes = [...notes];
    updatedNotes[index].title = editedTitle;
    updatedNotes[index].content = editedContent;
    setNotes(updatedNotes);
  };

  //para filtrar las notas por titulo
  const filtrar = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          MyNotes
        </p>
        <input
          type="text"
          placeholder="Buscar por título"
          value={searchTerm}
          onChange={(e) => search(e.target.value)}
          id="buscador"
        />
        <NoteEditor onAddNote={addNote}/>
        <NoteList notes={filtrar} onDeleteNote={deleteNote}  onEditNote={editNote}/>
      </header>
    </div>
  );
}

export default App;
