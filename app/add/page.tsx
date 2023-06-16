'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Add = () => {
	const [date, setDate] = useState('');
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
  const [error, setError] = useState(false);

	const router = useRouter();

  const addTodo = ()=>{
   if( !title.trim() || !desc.trim() ){
    setError(true)
    return
   } 
    const todo = {title,desc,date: date ? new Date(date).toLocaleString() : Date().toLocaleString()}
    console.log(todo)
    ///// 


    ////
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
          <h3 className='text-2xl '>desc :</h3>
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="border-2 p-2 mb-8 ms-4 rounded shadow" />

          <div className='flex  items-start '>
            <h3 className='text-2xl me-4'>Date & Time :</h3>
            <input
              type="datetime-local"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                console.log(new Date(e.target.value).toLocaleString());
              }}
              className='border-2 p-2 mb-8'
            />
          </div>
				</div>
        <div className='flex flex-col items-center justify-center mt-8' >
			  	<button className='bg-gray-700 text-white py-2 px-8 rounded mb-2 shadow' onClick={addTodo}>Add todo!</button>
          {error && <i className='text-red-700'>Wrong Data ! </i>}
        </div>
			</div>
		</div>
	);
};

export default Add;
