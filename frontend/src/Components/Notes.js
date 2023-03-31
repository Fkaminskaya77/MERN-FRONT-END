import React from "react";

function Notes({ Note }) {
  return (
    <main className="notes">
      <div className="notesPage">
        {Note.map((note, index) => {
          return (
            <div key={index} className="content--container">
              <h3 className="content__title">{note.title}</h3>
              <p>{note.body}</p>
              <div className="content__icons">
                <button>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button>
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
              </div>
            </div>
          );
        })}

        <button>NEW NOTE +</button>
      </div>
    </main>
  );
}

export default Notes;
