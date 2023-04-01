import React from "react";

export default function noteForm() {
  console.log("Form");
  return (
    <div>
      <form>
        <input type="text" placeholder="title"></input>
        <textarea></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
