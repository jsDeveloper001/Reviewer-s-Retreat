import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    return (
        <Link to={`/books/${book.bookId}`}>
            <div className='border border-[#13131326] rounded-3xl p-4'>
                <div className='section-bg rounded-3xl px-8 md:px-12 lg:px-24 py-6 flex justify-center'>
                    <img src={book.thumbnail} alt="Book Cover Image" className='rounded-sm w-full max-h-64' />
                </div>
                <div className='border-b-2 border-dashed pb-4'>
                    <div className='flex gap-3 primary-color mt-4 mb-4'>
                        {book.tags.map((tag, indx) => <li key={indx} className='list-none px-3 py-1 bg-[#22be0a27] rounded-2xl'>{tag}</li>)}
                    </div>
                    <h2 className='font-bold text-2xl'>{book.bookName}</h2>
                    <p className='font-medium mt-4'>By: {book.author}</p>
                </div>
                <div className='flex justify-between mt-4 font-medium text-base'>
                    <span>{book.category}</span>
                    <span>{book.rating} <i className="fa-regular fa-star"></i></span>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;