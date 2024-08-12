'use client';


export default function CategoriesPage() {
  

  return (
    <div className='flex flex-wrap gap-5 mt-20'>
      
      <div className='w-1/2 h-1/2 bg-gray-200 rounded-lg p-5'>
        <h1 className='text-2xl font-bold'>Create Category</h1>
        <form className='flex flex-col gap-5'>
          <input type='text' placeholder='Category Name' className='p-2 border border-gray-300 rounded-lg'/>
          <input type='text' placeholder='Category Description' className='p-2 border border-gray-300 rounded-lg'/>
          <button className='p-2 bg-primary text-white rounded-lg'>Create</button>
        </form>
      </div>
    </div>
  );
}
