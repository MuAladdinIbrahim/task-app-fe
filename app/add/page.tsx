"use client"
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { gql } from "@apollo/client";

const ADD_TODO_MUTATTION = gql`
  mutation($title: String! $description: String! $status: String! $userId: String!){
    create(input: { userId: $userId, title: $title, description: $description, status: $status}) {
      title,
      description,
      id,
      userId,
      status
    }
  }
  `
const AddTodo = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [addTodoItem, { loading, error }] = useMutation(ADD_TODO_MUTATTION, {
    onCompleted: (data) => {
      console.log({ data });
      router.push('/');
    },
    onError: (error) => {
      console.error({ error, message: error.message });
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodoItem({ variables: { title, description: desc, status: 'in_progress', userId: '9f4d25e6-e3d1-4ca5-8a55-13938b7e2a49' } });
  };

  return (
    <>
      <div className={'flex flex-col justify-center items-center'}>
        <div className={'bg-white p-9 my-20 w-4/6 rounded-lg shadow-xl'}>
          <div className={'flex items-center mb-8'}>
            <h1 className={'text-4xl font-bold'}>Add somthing to do! 👀 </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <h3 className='text-2xl '>Title :</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 p-2 mb-8 ms-4 rounded shadow" />
            <h3 className='text-2xl '>description :</h3>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="border-2 p-2 mb-8 ms-4 rounded shadow" />
            <button type="submit" disabled={loading} className='bg-gray-700 text-white py-2 px-8 rounded mb-2 shadow'>
              {loading ? 'Adding...' : 'Add'}
            </button>
          </form>
          {error && <i className='text-red-700'>Wrong Data ! {error.message}</i>}
        </div>
      </div>
    </>
  );
};

export default AddTodo;