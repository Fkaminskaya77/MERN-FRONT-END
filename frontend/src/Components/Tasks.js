import react from 'react';


function Tasks() {

    return(
        <main className= 'tasks'>
             <div className="taskPage">
            
                <h3>PlaceHolder:Title</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <p>PlaceHolder:URGENCY</p>
        
        <div className='content__icons'>
            
            <button><i class="fa-solid fa-trash"></i></button>
            <button><i class="fa-regular fa-pen-to-square"></i></button>
            
            <button>NEW TASK +</button>
        </div>
            
              </div>

        </main>
        
    )
}

export default Tasks;



