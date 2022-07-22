import {React, useState} from "react";


const Draggable = () => {
    const [draggableItems,setDraggableItems] = useState([])
    const [name,setName] = useState("")
    const [uuid,setUuid] = useState(0)
    return (
        <>
            <div className="draggable">
                {draggableItems.map((e,i)=>{
                    return (
                    <div className="draggable__comment" 
                    key={e.id} draggable="true"  
                    style={{top:`${e.y+"px"}`,
                        left:`${e.x+"px"}`,
                        zIndex:e.z,
                        backgroundColor:`rgba(205, 205, 205,${e.opacity})`,
                        width:`${e.width}px`,
                        height:`${e.height}px`,
                        position:"absolute"
                    }}
                    
                    onDragEnd={(a)=>{
                        if(e.isDrag){
                            console.log(e.width);
                            e.x=a.pageX;
                            e.y=a.pageY;
                            setDraggableItems([...draggableItems]);
                        }
                        else{
                            console.log(a.pageX);
                            e.width = e.width - (e.x+e.width) + a.pageX;
                            e.height = e.height - (e.y+e.height) + a.pageY;
                            e.isDrag = true
                            setDraggableItems([...draggableItems]);
                        }
                    }}>
                        <div style={{float:"right"}}
                        onClick={()=>{
                            draggableItems.splice(i,1)
                            setDraggableItems([...draggableItems]);
                        }}
                        >
                            X
                        </div>
                        <div>
                            {e.name}
                        </div>
                        <textarea style={{width:"calc(100% - 18px)",height:"calc(100% - 42px)",resize:"unset",overflow:"hidden",backgroundColor:`rgba(255, 255, 255,${e.opacity})`}}></textarea>
                        <input 
                            style={{width:"70%",display:"inline-block"}}
                                    type = "range" 
                                    value = {e.opacity*100}
                                    min = "0"
                                    max = "100"
                                    onChange={(a)=>{
                                        e.opacity = a.target.value/100;
                                        setDraggableItems([...draggableItems]);
                                    }}
                                    />
                            <div 
                            style={{display:"inline-block",position:"absolute",right:"0",bottom:"18"}}
                            onMouseDown={()=>{
                                e.isDrag = false;
                                setDraggableItems([...draggableItems]);
                            }}
                            >
                                &gt;
                            </div>

                        
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
                        setDraggableItems([...draggableItems,{id:uuid,x:0,y:0,opacity:0,name:name,width:100,height:100,isDrag:true}])
                        setUuid(uuid+1)
                    }}>
                        Add a new textarea
                    </button>
                </form>
            </div>
        </>
    );
}


export default Draggable