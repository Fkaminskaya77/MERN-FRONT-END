import React from "react";
import { deleteNote } from "../CRUD/noteFunction.js";
import NoteForm from "./noteForm.js";

function Notes({ Note }) {
  return (
    <main className="page">
      <h2 className="page__title">Notes</h2>
      <button onClick={() => < NoteForm/>} className="btn--gray">
        NEW NOTE +
      </button>
      <NoteForm/>



      <div className="container--flex">
        {Note.map((note, index) => {
          return (
            <div key={index} className="content--container">
              <h3 className="content__title">{note.title}</h3>
              <p className="content__body">{note.body}</p>
              <div className="content__icons">
                <button onClick={() => deleteNote(note._id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button>
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Notes;
