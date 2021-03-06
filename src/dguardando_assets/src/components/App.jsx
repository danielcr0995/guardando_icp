import React, {useEffect, useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note"
// import notes from "../notes"
import CreateArea from "./CreateArea"
import { dguardando } from "../../../declarations/dguardando"

function App(){
    // console.log(notesList)
    const [notesList,setNotes]=useState([]);
    // console.log(notesList);\

    function addNote(noteNew){        
        // console.log(note);
        dguardando.createNote( noteNew.title, noteNew.content);

        setNotes(prevNotes=> {
            return (
                [noteNew, ...prevNotes]
            )            
        })
        // console.log(notesList);
    }

    useEffect(()=>{
        // console.log("triggered");
        fetchData();
    },[])

    async function fetchData(){
        const notesArray = await dguardando.readNotes();
        setNotes(notesArray);
    }

    function deleteNote(id){
        dguardando.deleteNote(id);
        setNotes(prevNotes =>{
            return (prevNotes.filter((note,index)=>{
                return index!==id
            }))
        })
    }
    
    return (<div>
                <Header/>
                <CreateArea 
                    onAdd = {addNote}
                />

                {/* {notes.map(note =>(                 
                <Note   
                    key={note.key}                 
                    title={note.title}
                    content={note.content}
                /> */}
                {/* ))} */}
                {notesList.map((note,index)=>(
                    <Note   
                        key={index}   
                        id={index}              
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNote}
                     />
                
                ))}
                <Footer/>
                

            </div>)
}

export default App;