import { useLoaderData, useParams } from 'react-router-dom'

import { Toaster } from 'react-hot-toast';
import { UpdateDatabase } from '../../utils/localStorage';

const BookDetails = () => {
    const { bookId } = useParams()
    const booksData = useLoaderData();
    const existedBook = booksData.find(bookData => bookData.bookId == bookId);

    const addToReadlist = (bookId) => {
        UpdateDatabase("ReadList", bookId)
    }

    const addToWishlist = (bookId) => {
        UpdateDatabase("WishList", bookId)
    }

    return (
        <div className='px-3'>
            <div className="mt-3 md:mt-12 grid grid-cols-1 md:grid-cols-[1fr,2fr]  gap-10">
                <div className="section-bg rounded-3xl p-12 flex items-center justify-center">
                    <img src={existedBook.thumbnail} alt="" className="rounded-lg w-full" />
                </div>
                <div className=''>
                    <h1 className="mb-4 font-bold text-3xl lg:text-5xl">{existedBook.bookName}</h1>
                    <p className='font-semibold text-xl text-[#131313CC]'>By: {existedBook.author}</p>
                    <p className='my-4 py-3 font-semibold border-gray-200 border-y text-[#131313CC]'>{existedBook.category}</p>
                    <p className='text-[#131313B3] font-normal'><span className='font-bold text-black text-base'>Review: </span>{existedBook.review}</p>
                    <div className='flex gap-4 items-center pb-6 border-b-2 my-8'>
                        <span className='font-bold text-base'>Tag</span>
                        {
                            existedBook.tags.map((tag, idx) => <li className='list-none bg-[#22be0a23] rounded-2xl px-4 primary-color' key={idx}>#{tag}</li>)
                        }
                    </div>
                    <table className="w-full lg:w-1/2">
                        <thead></thead>
                        <tbody>
                            <tr className='text-base font-medium'>
                                <td className='text-[#131313B3]'>Number of Pages:</td>
                                <td><span className='font-semibold'>{existedBook.totalPage}</span></td>
                            </tr>
                            <tr className='text-base font-medium'>
                                <td className='text-[#131313B3]'>Publisher:</td>
                                <td><span className='font-semibold'>{existedBook.publisher}</span></td>
                            </tr>
                            <tr className='text-base font-medium'>
                                <td className='text-[#131313B3]'>Years of Publishing:</td>
                                <td><span className='font-semibold'>{existedBook.yearOfPublishing}</span></td>
                            </tr>
                            <tr className='text-base font-medium'>
                                <td className='text-[#131313B3]'>Rating:</td>
                                <td><span className='font-semibold'>{existedBook.rating}</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex gap-4 mt-7 mb-5'>
                        <button onClick={() => addToReadlist(existedBook.bookId)} className='btn text-black text-base border-2 border-gray-400 font-bold px-7'>Read</button>
                        <button onClick={() => addToWishlist(existedBook.bookId)} className='btn secondary-button text-white text-base font-bold'>Wishlist</button>
                    </div>
                </div>
                <Toaster />
            </div>
        </div>
    );
}
export default BookDetails;