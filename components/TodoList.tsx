'use client'

import { TODO } from "@/types";
import TodoItem from "./TodoItem";
import { useState } from "react";


const TodoList =(props: any)=>{
    // const todos : Todo[] = props.todos
    const[todos,setTodos] = useState(props.todos)
    const remove = (id : number)=>{
      setTodos(todos.filter((todo: TODO)=>todo.id !== id))

      /// server
    }
    return (
        <div className="p-5">
            {
               todos.length ? todos.map((todo: TODO)=>(
                    <TodoItem todo={todo} key={todo.id} remove={remove}/>
                ))  : (
                    <h3 className="text-center text-xl">
                        Empty List 😳
                    </h3>
                )
            }
        </div>
    )
}

export default TodoList;