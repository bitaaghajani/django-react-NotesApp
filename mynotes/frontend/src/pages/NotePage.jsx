import React from "react";
import { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const NotePage = ({ history }) => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getNoteId();
  }, [id]);
  let getNoteId = async () => {
    if(id ==="new") return;
    let res = await fetch(`/notes/${id}/`);
    let data = await res.json();
    setNote(data);
  };
  let updateNote = async () => {
    fetch(`/notes/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };
  let createNote = async () => {
    fetch(`/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    })
    navigate('/');
  };
  let handleSubmit = () => {
    if(id !== "new" && !note.body){
        deleteNote()
    } else if(id !== 'new'){
    updateNote();
    } else if(id ==="new" && note !== null){
        createNote()
    }
    navigate("/");
  };
  let deleteNote = async () => {
    fetch(`/notes/${id}/delete/`, {
      method: "DELETE",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    navigate("/");
  };
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {id !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
