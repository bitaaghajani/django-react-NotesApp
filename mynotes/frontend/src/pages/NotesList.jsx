import React, { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import AddNotes from "../components/AddNotes";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);
  let getNotes = async () => {
    let res = await fetch("/notes/");
    let data = await res.json();
    setNotes(data);
  };
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>

      <div className="notes-list">
        {notes.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
      <AddNotes />
    </div>
  );
};

export default NotesList;
