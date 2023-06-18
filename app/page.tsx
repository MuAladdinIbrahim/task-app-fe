import TodoList from "@/components/TodoList";
import Link from "next/link";
import React from "react";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const userId = '9f4d25e6-e3d1-4ca5-8a55-13938b7e2a49' // hardcoded for now, will be replaced with auth later

const FIND_TASKS_QUERY = gql`
  query($userId: String!){ 
    find(args: {userId: $userId}) {
      title,
      description,
      id,
      status
    }
  }
`;

export default async function Page() {
  const todoTasks = []
  try {
    const { data } = await getClient().query({ query: FIND_TASKS_QUERY, variables: { userId } })
    console.log(`data is received: ${JSON.stringify({ data })}`)
    const tasks = data?.find || []
    todoTasks.push(...tasks)
  } catch (error: any) {
    console.log({ errorMsg: error.message })
  }
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
          {<TodoList todos={todoTasks} />}
        </div>
      </div>
    </>
  )
}
