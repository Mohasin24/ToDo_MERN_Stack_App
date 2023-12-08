import './Todo.css'
import {useState} from 'react';

const Todo = ()=>
{
    const[text,setText] = useState("")
    const[todos,setTodo] = useState([]);

    const handleSubmit = (event)=>{
        event.preventDefault();
        setTodo([...todos,text]);
        setText("");
        console.log(todos)
    }

    const handleChange = (event)=>{
        setText(event.target.value);
    }

    return(
        <div className="todo-container">
            <form onSubmit={handleSubmit} className="todo-form">
                <input type="text"  placeholder="Enter todo here" onChange={handleChange}/>
                <button>Add</button>
            </form>

            <ul className='todo-list'>
                {todos.map((item,index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
        
    )
}

export default Todo;