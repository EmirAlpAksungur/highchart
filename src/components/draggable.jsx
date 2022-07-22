import {React, useState} from "react";
import '../assets/draggable.css'

const Draggable = () => {
    const [draggableItems,setDraggableItems] = useState([])
    const [name,setName] = useState("")
    const [uuid,setUuid] = useState(0)
    return (
        <>
            <div className="draggable">
                {draggableItems.map((e)=>{
                    return (
                    <div className="draggable__comment" 
                    key={e.id} draggable="true"  
                    style={{top:`${e.y+"px"}`,left:`${e.x+"px"}`,zIndex:e.z}} 
                    onDragEnd={(a)=>{
                        e.x=a.pageX;
                        e.y=a.pageY;
                        setDraggableItems([...draggableItems]);
                    }}>
                        <div>
                            {e.name}
                        </div>
                        <textarea style={{backgroundColor:`rgba(205, 205, 205,${e.opacity})`}}
                        onFocus={()=>{
                            e.opacity=e.opacity+0.3;
                            setDraggableItems([...draggableItems]);
                        }}
                        onBlur={()=>{
                            e.opacity=e.opacity-0.3;
                            setDraggableItems([...draggableItems]);
                        }}
                        />
                    </div>) 

                    
                    
                })}
            </div>
            <div style={{backgroundcolor:"red",marginTop:"20px"}}>
                <form action="">
                    <label htmlFor="name">name for the textarea: </label>
                    <input type="text" id="name" onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        setDraggableItems([...draggableItems,{id:uuid,x:0,y:0,opacity:0,name:name}])
                        setUuid(uuid+1)
                    }}>
                        Add a new textarea
                    </button>
                </form>
                <ul>
                    {
                        draggableItems.map((e,i)=>{
                            return (
                                <li key={e.id} style={{marginTop:"10px"}}>
                                    {e.name}
                                    <br />
                                    opacity:
                                    <input 
                                    type = "range" 
                                    value = {e.opacity*100}
                                    min = "0"
                                    max = "100"
                                    onChange={(a)=>{
                                        e.opacity = a.target.value/100;
                                        setDraggableItems([...draggableItems]);
                                    }}
                                    />
                                    <br />
                                    <button style={{marginTop:"5px"}}
                                    onClick={()=>{
                                        draggableItems.splice(i,1)
                                        setDraggableItems([...draggableItems]);
                                    }}
                                    >delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
}


export default Draggable