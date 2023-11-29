import React, { useState } from 'react';

const Note = ({ note, onDeleteNote, onEditNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  //con esto sabremos si estamos editando, para utilizarlo en el ifelse de mas abajo
  const handleEdit = () => {
    setIsEditing(true);
  };

  //con esto sabremos si hemos terminado de editar y el contenido editado
  const handleSave = () => {
    onEditNote(editedTitle, editedContent);
    setIsEditing(false);
  };


  //si se esta editando se permite modificar el texto, y se muestra el boton de guardar
  if(isEditing){
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="Título"
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            placeholder="Contenido"
          />
        </div>
        <button onClick={handleSave}>Guardar</button>
      </div>
    );
  //si no se esta editando, se muestra el texto, el boton de editar y el boton de borrar
  }else{
    return(
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
        <div>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={onDeleteNote}>Eliminar</button>
        </div>
      </div>
    );
  }
};
export default Note;
