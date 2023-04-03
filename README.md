# MERN-FRONT-END

## Introduction
 This project uses React, React Router Dom, and connects and communicates with the back-end RESTfully using CRUD. 

 Backend Repo: https://github.com/erionew/mern-dashboard-backend.git
 

## What is our group project about?
Our group project is based on a simple organizational dashboard. Our goal was to create a space for anyone to keep themselves organized with a personal notes section (like having an address, or something they need to remember) and a personal tasks section for a day to day list (that has a little extra feature for urgency level).

## Installation  
- Clone this repository
    - > git clone

- Install dependencies
     - > npm install 
    
- Testing React
   - > npm run start or npm start

- Extra Features
    - > npm install prettier


## CRUD Front End Code
POST and DELETE functionality. This will give you the oportunity to delete a note by using the trashcan icon(DELETE). 

```
export function deleteNote(id) {
  //console.log(id);
  fetch("https://mern-dashboard-grp3.herokuapp.com/notes/" + id, {
    method: "DELETE"

  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
    })
    .catch((id) => console.log(id));
  alert("Note will be deleted!");
  window.location.reload();
}
```
Creating a new note by selecting the new note button(POST).
```
export function postNote(id) {
  //console.log(id);
  fetch("https://mern-dashboard-grp3.herokuapp.com/notes/", {
    method: "POST",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
    })
    .catch((id) => console.log(id));
  window.location.reload();
}

```


## Picture of Final DashBoard homepage

![Dashboard MERN](https://i.imgur.com/aLskatE.png) 

## Upcoming Features
- CRUD for update and editing notes or tasks
- Plans of making the tasks sortable by urgency
