import TodoList from "@/components/TodoList";
import { Todo } from "@/types";
import Link from "next/link";
import React from "react";


const todos : Todo[] = [
  {
    id:1,
    title:'hhhh',
    desc:'llllllllllllllllll',
    status:'done',
    date:'6/14/2023, 1:40:23 AM',
  },
  {
    id:4,
    title:'cmdkcmdkcdk',
    desc:'dccd, l,dl, l, ld,l,,ld,lldldlddk',
    status:'todo',
    date:Date(),
  },
]
// GET
const getTodos = async ()=>{
  // const data = await Promise.resolve(todos)
  // return data;
  
  const data = await fetch("",{
    method: "POST",
    body: JSON.stringify({
      query: '{ find(args: {userId: " "}){title} }',
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(res=>res.json())

  return data;

}

// UPDATE 
const updateStatus = (id : number, status: string)=>{
  
}
// ADD 
const AddTodo = (todo: Todo)=>{
  
}
// Delete 
const deleteTodo = (id : string)=>{
  
}

export default async function Home() {
  const TODOS = await getTodos();
  return (
    <>
      <div className={"flex flex-col justify-center items-center"}>
        <div className={"bg-white p-9 my-20 w-4/6 rounded-lg shadow-xl"}>

          <div className={"flex justify-between items-center mb-6"}>
            <h1 className={"text-4xl font-bold"}> 📌 My Todo List </h1>
            <Link href='/add' >
              <button > Add ✏️ </button>
            </Link>
          </div>

          <TodoList todos={TODOS} />
        </div>
      </div>
    </>
  )
}
