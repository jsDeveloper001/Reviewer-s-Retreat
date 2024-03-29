import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoDocumentTextOutline, IoPeopleSharp } from "react-icons/io5";

const StoredAllBook = ({ storedBook }) => {
    const { thumbnail, bookName, author, tags, yearOfPublishing, publisher, totalPage, category, rating } = storedBook;
    console.log(thumbnail)
    return (
        <div>
            <div className='flex gap-12 flex-col md:flex-row border border-[#13131326] rounded-3xl p-4'>
                <div className='rounded-xl section-bg p-12'>
                    <img src={thumbnail} alt="Book Cover Image" className='rounded-sm mx-auto w-full sm:w-[160px] sm:h-[170px]' />
                </div>
                <div className='w-full'>
                    <h2 className='font-bold text-3xl'>{bookName}</h2>
                    <p className='font-medium mt-3'>By: {author}</p>
                    <div className='flex flex-wrap gap-3 primary-color mt-3 mb-5'>
                        <span className='font-bold text-lg text-black'>Tag</span>{tags.map((tag, indx) => <li key={indx} className='list-none px-3 py-1 bg-[#22be0a27] rounded-2xl'>#{tag}</li>)}
                        <p className='text-gray-400 flex items-center gap-1'><FaLocationDot /> Year of Publishing: {yearOfPublishing}</p>
                    </div>
                    <div className='flex flex-wrap items-center gap-3 text-gray-600 pb-6 border-b'>
                        <p className='flex items-center gap-1'><IoPeopleSharp /> Publisher: {publisher}</p>
                        <p className='flex items-center gap-1'><IoDocumentTextOutline /> Page: {totalPage}</p>
                    </div>
                    <div className='flex flex-wrap gap-2 mt-6'>
                        <p className='px-3 py-1 rounded-full bg-blue-200 text-blue-600'>Category: {category}</p>
                        <p className='px-3 py-1 rounded-full bg-orange-200 text-orange-600'>Rating: {rating}</p>
                        <button className='primary-bg px-3 py-1 rounded-full text-white hover:cursor-pointer'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoredAllBook;