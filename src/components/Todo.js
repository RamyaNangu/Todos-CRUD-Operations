import {useEffect, useState} from 'react'
import Item from './Item'

const Todo = () =>{
    const [task,setTask] = useState("")
    const [todolist,setTodoList] = useState(JSON.parse(localStorage.getItem("todolist")) ?? [])
    const [editIndex,setEditIndex] = useState(null)

    const handleAddButton = (e)=>{
        e.preventDefault()
        const updatedList = [...todolist,task]
        setTodoList(updatedList)
        setTask("")
    }

    const onDelete = (index) =>{
        const temp = [...todolist]
        temp.splice(index,1)
        setTodoList(temp)
    }

    const onSaveHandler =(e)=>{
        e.preventDefault()
        if(task && editIndex !== null){
            const updatedList = [...todolist]
            updatedList[editIndex] = task;
            setTodoList(updatedList)
            setTask("")
            setEditIndex(null)
        }
        
    }
    

    const onEdit = (index) =>{
        setTask(todolist[index])
        setEditIndex(index)

    }

    useEffect(()=>{
        const updatedList = [...todolist]
        localStorage.setItem("todolist",JSON.stringify(updatedList))
    },[todolist])

    return (
        <div className="flex flex-col justify-center items-center m-2">
            <h1>Todos React Application</h1>
            <form className="m-2" onSubmit={handleAddButton}>
                <input type="text" required value={task} onChange={(e)=>{
                    const updatedtask = e.target.value;
                    setTask(updatedtask)
                }} className='border border-black px-1'/>
                {editIndex !== null ? ( <button type="button" onClick={onSaveHandler} className="bg-blue-500 px-2 mx-2">Save</button>) : (<button type="submit" className="bg-blue-500 px-2 mx-2">Add</button>)}
                
            </form>
            <div>
                {todolist.map((item,index)=><Item key={index} todo={item} onDelete={onDelete} onEdit={onEdit} index={index} />)}
            </div>
        </div>
    )
}

export default Todo;