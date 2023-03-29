import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Notes() {
    GetNotes()
    return (
    <div>
        <button type="button" onClick="Note"> NEW NOTE </button>
    </div>
    )

}

function newNote () {
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
                    onClick = "GetNotes"
                    >
                SAVE NOTE
                </button>
            </form>
        </div>
    </div>
    )
}
console.log(newNote);

function GetNotes() {
    const [posts, setPosts] = useState([ ]);

    useEffect(() => {
        const JSON = 'https://mern-dashboard-grp3.herokuapp.com/notes';
        axios.get(JSON)
//creating an array out of JSON data to map through it/render it on page
        .then((response) => {
            console.log("RES", response.data);
        if(response.data) {
            console.log(response.data)
            setPosts(response.data)
            console.log(setPosts)
            console.log(typeof posts, posts)
        
        }else {
            console.log("ERROR");
            }
        })
        .catch((error) => {
            console.log("ERROR", error);
        });
        console.log(JSON);
    }, [])

    return (
            <div>{posts}</div>
    )
    //error:  Line 68:8:  React Hook useEffect has a missing dependency: 'posts'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
}

/*
//final  pulls/copy to tasks, I start CRUD, they do R Router
const postsRenderer = posts.map((post) => (
    <div className='post-container' key={post.id}>
        <a href={post.url_for_post} target="_blank" className='title'>{post.title}</a>
    <div>{post.content}</div>
</div>
*/
