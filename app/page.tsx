import TodoList from "@/components/TodoList";
import { Todo } from "@/types";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css"


const todos : Todo[] = [
  {
    id:'',
    title:'hhhh',
    desc:'llllllllllllllllll',
    status:'done',
    date:new Date(),
  },
]

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>

          <div className={styles.header}>
            <h1 className={styles.title}>My Todo List</h1>
            <Link href='/add' >
              <button > Add + </button>
            </Link>
          </div>

          <TodoList todos={todos} />
        </div>
      </div>
    </>
  )
}
