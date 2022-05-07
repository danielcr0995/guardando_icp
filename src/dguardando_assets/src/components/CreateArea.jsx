import React , {useState} from "react";

function CreateArea(props) {
  const [note, setContent]= useState({    
    title:"",
    content:""
  })

  const [writing, setWriting] = useState(false)
  // const [rows, setRows] = useState("1")
  

  
  function changeText(event){
    const {name,value}=event.target;
    // console.log(name);
    setContent(prevValue => {
      // console.log(prevValue);
      return { 
        ...prevValue,
        [name]: value
      };
    });
  }
  // console.log(note);

  function submitNote(event){
    props.onAdd(note)
    setContent({
      title:"",
      content:""
    })
    setWriting(false)
    event.preventDefault();
  }

  function handleWriting(){
    setWriting(true)
    // setRows("3")
  }

  return (
    <div>
      <form className="create-note">
        {writing && <input onChange={changeText} value={note.title} name="title" placeholder="Title" />}
        <textarea onClick={handleWriting} onChange={changeText} value={note.content} name="content" placeholder="Take a note..." rows={writing? 3:1} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
