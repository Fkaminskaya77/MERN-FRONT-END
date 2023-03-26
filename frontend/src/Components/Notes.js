import react from 'react';


export default function Notes() {
    Note()
    return (
    <div>
        <button type="button" onClick="Note"> NEW NOTE </button>
    </div>
    )
}

function Note() {
    return (
        <div>
            <h4>NEW NOTE🌟</h4>
        </div>
    )
}

/*
button LINK TO PROMPT HTML FORM TO COLLECT THEIR DATA, SCHEMA MODELS TO STORE IT, AND RETURN IT BY renderimg user's JSON (notes) to the page.
JSON database for user gets created when they save their first note. otherwise the page displays message saying;
"oh no you haven't jotted any notes yet, click new note below"
*/