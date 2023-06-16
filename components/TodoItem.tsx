'use client'
import { Todo } from '@/types';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

const TodoItem = (props: any) => {
  // PROPs
	const todoItem: Todo = props.todo;

  // STATEs
  const [status,setStatus] : any = useState(todoItem.status)


  // FUNCTIONs
  const changeStatus = ():void=>{
    setStatus(status === 'done'? 'todo' : 'done')
    ////// on server
  }

	return (
		<div
			className={`py-3 px-4 rounded-lg mb-5 shadow-lg ${status === 'done' ? 'bg-purple-300 opacity-75 ' : 'bg-blue-200'}`}
		>
			<div className="flex justify-between items-center">
				<div>
					<h4 className={`font-semibold text-xl ${status === 'done' && 'line-through italic'}`}>
						Title : {todoItem.title}
					</h4>
					<i className="text-xs"> Time : {todoItem.date}</i>
					<p className="mt-4">Description : {todoItem.desc}</p>
				</div>
				<div className="flex flex-col w-20 justify-between items-center">
					<button className={` bg-green-600 w-full text-white p-2 rounded mb-2`} onClick={changeStatus}>
						{status === 'done' ? ' Undo!  ' : 'Done!'}
					</button>
					<button className={`bg-red-500 w-full text-white p-2 rounded`} onClick={()=>props.remove(todoItem.id)}>Delete</button>
				</div>
			</div>
		</div>
	);
};

export default TodoItem;
