'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { TODO } from '@/types';

function Add() {
  
  const userId = '9f4d25e6-e3d1-4ca5-8a55-13938b7e2a49'

	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  
  const ADD_TODO_MUTATTION = gql`
  mutation($todo: TODO!){
    create(input: {todo: $todo}) {
      title,
      description,
      id,
    }
  }
  `

  const todo = { title, description: desc, userId, status: 'in_progress' }
  
  const [addTodo, { data, loading, error: err }] = useMutation(ADD_TODO_MUTATTION, { variables: { todo }} );
  if (loading) return 'Submitting...';
  if (err) return `Submission error! ${err?.message}`;

  console.log({ data });

  
  const handleAddTodo = async () =>{
    
    if (!title.trim() || !desc.trim() ){
      setError(true)
      return
    }
    
    const todo: TODO = {
      title,
      description: desc,
      userId,
      status: 'in_progress'
    }
    addTodo({ variables: { todo }});
    
    router.push('/')
  }

	return (
		<div className={'flex flex-col justify-center items-center'}>
			<div className={'bg-white p-9 my-20 w-4/6 rounded-lg shadow-xl'}>
				<div className={'flex items-center mb-8'}>
					<h1 className={'text-4xl font-bold'}>Add somthing to do! 👀 </h1>          
				</div>

				<div className="flex flex-col px-8">
          <h3 className='text-2xl '>Title :</h3>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 p-2 mb-8 ms-4 rounded shadow" />
          <h3 className='text-2xl '>description :</h3>
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="border-2 p-2 mb-8 ms-4 rounded shadow" />
				</div>
        <div className='flex flex-col items-center justify-center mt-8' >
			  	<button className='bg-gray-700 text-white py-2 px-8 rounded mb-2 shadow' onClick={handleAddTodo}>Add todo!</button>
          {error && <i className='text-red-700'>Wrong Data ! </i>}
        </div>
			</div>
		</div>
	);
};

export default Add;
