import { Todo } from "@/types";
import TodoItem from "./TodoItem";


const TodoList =(props: any)=>{

    const todos : Todo[] = props.todos

    return (
        <div>
            {
               todos.length ? todos.map(todo=>(
                    <>
                        <TodoItem todo={todo} />
                    </>
                ))  : (
                    <h3 >
                        Empty List
                    </h3>
                )
            }
        </div>
    )
}

export default TodoList;