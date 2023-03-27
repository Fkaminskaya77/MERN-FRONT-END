import react from 'react';


export default function Notes() {
    Note()
    //JSON database for user gets created when they save their first note, otherwise the page displays mesage
    return (
    <div>
        <button type="button" onClick="Note"> NEW NOTE </button>
    </div>
    )
}

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
                        onClick = "saveNote(event)"
                        >
                    SAVE NOTE
                    </button>
                </form>
            </div>

        </div>
    )
}