import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div className='border border-[#13131326] rounded-3xl p-4'>
            <div className='section-bg rounded-3xl px-8 md:px-12 lg:px-24 py-6 flex justify-center'>
                <img src={book.thumbnail} alt="Book Cover Image" className='rounded-sm w-full max-h-52' />
            </div>
            <div className='border-b-2 border-dashed pb-4'>
                <div className='flex gap-3 primary-color mt-4 mb-4'>
                    {book.tags.map((tag, indx) => <li key={indx} className='list-none px-3 py-1 bg-[#23BE0A0D] rounded-2xl'>{tag}</li>)}
                </div>
                <h2 className='font-bold text-2xl'>{book.bookName}</h2>
                <p className='font-medium mt-4'>By: {book.author}</p>
            </div>
            <div className='flex justify-between mt-4 font-medium text-base'>
                <span>{book.category}</span>
                <span>{book.rating} <i class="fa-regular fa-star"></i></span>
            </div>
        </div>
    );
};

export default BookCard;