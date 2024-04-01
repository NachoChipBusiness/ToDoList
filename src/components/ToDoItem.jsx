import React, { useState } from "react";

function ToDoItem(props) {
    const [isDone, setIsDone] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [inputText, setInputText] = useState(props.note.text);

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function handleClick() {
        setIsDone(!isDone);
    }
    
    return (
        <li 
            style={{
                textDecoration: isDone ? "line-through" : "none",
                color: isDone ? "gray" : "black",
                userSelect: "none",
            }}
        >   
            {isEditing ? (<div>
                <input type="text" onChange={handleChange} value={inputText} />
                <button onClick={() => {
                    props.onEdit(props.idx, inputText);
                    setIsEditing(false);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-floppy2-fill" viewBox="0 0 16 16">
                        <path d="M12 2h-2v3h2z"/>
                        <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5V2.914a1.5 1.5 0 0 0-.44-1.06L14.147.439A1.5 1.5 0 0 0 13.086 0zM4 6a1 1 0 0 1-1-1V1h10v4a1 1 0 0 1-1 1zM3 9h10a1 1 0 0 1 1 1v5H2v-5a1 1 0 0 1 1-1"/>
                    </svg>
                </button>
            </div>)
            : ( <div>
                <div
                    onClick={handleClick}
                    onDoubleClick={() => {props.onDelete(props.idx)}}
                    title={"Edited On: " + props.note.editionDate}
                >
                    {props.note.text}
                </div>
                <button onClick={() => setIsEditing(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                    </svg>
                </button>
            </div>)}
        </li>
    )
}

// function ToDoItem(props) {
//     const [itemStyle, setItemStyle] = useState({textDecoration: "none"});

//     function handleClick() {
//         setItemStyle(prevStyle => {
//             if (prevStyle.textDecoration === "none") {
//                 return {
//                     ...prevStyle,
//                     textDecoration: "line-through"
//                 }
//             } else {
//                 return {
//                     ...prevStyle,
//                     textDecoration: "none"
//                 }
//             }
//         })
//     }

//     return (
//         <li onClick={handleClick} style={itemStyle}>{props.toDoItem}</li>
//     )
// }

export default ToDoItem;