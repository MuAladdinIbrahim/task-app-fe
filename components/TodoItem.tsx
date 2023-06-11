import { Todo } from "@/types";



const TodoItem = (props:any)=>{

    const todoItem : Todo = props.todo

    return(
        <>  
            <h2> { todoItem.title} </h2>
            <h2> {todoItem.desc}</h2>
        </>
    )
}

export default TodoItem;