import react from 'react';


export default function Notes() {
    const json = fetch("https://mern-dashboard-grp3.herokuapp.com/notes")
    Note()
    return (
    <div>
        <button type="button" onClick="Note"> NEW NOTE </button>
    </div>
    )

}
console.log(json)


function Note() {
    return (
        <div>
            <header></header>

            <div className='notes'>
            </div>

            <div className='newNote'>
                <h1>NEW NOTE🌟</h1>
                <form>
                    <input
                        type = "text"
                        heading = "heading"
                        title = "title"
                        body = "body"
                    />
                    <button 
                        type = "submit"
                        class = "btn"
                        onClick = "Notes"
                        >
                    SAVE NOTE
                    </button>
                </form>
            </div>

        </div>
    )
}

/*

1.
*USE MOCK FIRST TO GET COMPONENT WORKING AND TESTED & JSON RENDERED THEN ADD USER INTERACTION W/ BACKEND:
1. HTML form will be unfunctional - when user clicks submit it will render fake/MOCK JSON to page - not what the user entered saveNote(event) is instead going to invoke the main component rendering fake JSON


2. fetch JSON API from the backend. BUT No real USER interaction/data storage/JSON getting from the user to be returned.
https://mern-dashboard-grp3.herokuapp.com/
https://mern-dashboard-grp3.herokuapp.com/notes
https://mern-dashboard-grp3.herokuapp.com/tasks
3. RENDER MOCK JSON TO PAGE*

2.
CRUD
*/