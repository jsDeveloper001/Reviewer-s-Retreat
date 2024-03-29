import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ReadDatabase } from '../../utils/localStorage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StoredAllBook from '../../components/StoredBooks/StoredAllBook';



const BookList = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const BookDatas = useLoaderData();

    const [ReadListedBooks, setReadListedBooks] = useState([])
    const [WishListedBooks, setWishListedBooks] = useState([])

    const [displayReadListedBooks, setdisplayReadListedBooks] = useState([])
    const [displayWishListedBooks, setdisplayWishListedBooks] = useState([])

    useEffect(() => {
        const LoadReadIds = ReadDatabase("ReadList");
        const LoadWishIds = ReadDatabase("WishList");
        if (LoadReadIds.length > 0) {
            const ReadListBooks = BookDatas.filter(bookData => LoadReadIds.includes(bookData.bookId))
            const WishListBooks = BookDatas.filter(bookData => LoadWishIds.includes(bookData.bookId))
            setReadListedBooks(ReadListBooks);
            setWishListedBooks(WishListBooks)

            setdisplayReadListedBooks(ReadListBooks)
            setdisplayWishListedBooks(WishListBooks)
        }
    }, [BookDatas])
    const handleDisplayReadListBooks = (Filter) => {
        if (Filter === "rating") {
            const sortedReadList = ReadListedBooks.sort((a, b) => b.rating - a.rating)
            const sortedWishList = WishListedBooks.sort((a, b) => b.rating - a.rating)

            setdisplayReadListedBooks([...sortedReadList])
            setdisplayWishListedBooks([...sortedWishList])
        }
        else if (Filter == "pages") {
            const sortedReadList = ReadListedBooks.sort((a, b) => b.totalPage - a.totalPage)
            const sortedWishList = WishListedBooks.sort((a, b) => b.totalPage - a.totalPage)

            setdisplayReadListedBooks(...[sortedReadList])
            setdisplayWishListedBooks([...sortedWishList])
        }
        else if (Filter == "year") {
            const sortedReadList = ReadListedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
            const sortedWishList = WishListedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)

            setdisplayReadListedBooks([...sortedReadList])
            setdisplayWishListedBooks([...sortedWishList])
        }
    }

    return (
        <div className='mt-12 ps-6 pe-2 md:mt-3'>
            <div className='section-bg rounded-2xl py-7'>
                <h2 className="font-bold text-4xl text-center">Books</h2>
            </div>
            <div className='flex justify-center my-14'>
                <details className="dropdown">
                    <summary className="px-10 m-1 btn primary-bg text-white hover:bg-slate-800">Short By</summary>
                    <ul className="w-full shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                        <li className='font-bold text-xs' onClick={() => handleDisplayReadListBooks("rating")}><a>Rating</a></li>
                        <li className='font-bold text-xs' onClick={() => handleDisplayReadListBooks("pages")}><a>Page Numbers</a></li>
                        <li className='font-bold text-xs' onClick={() => handleDisplayReadListBooks("year")}><a>Publish Year</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="flex flex-col gap-9 mt-9">
                            {
                                displayReadListedBooks.map((storedBook, idx) => <StoredAllBook storedBook={storedBook} key={idx} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex flex-col gap-9 mt-9">
                            {
                                displayWishListedBooks.map((storedBook, idx) => <StoredAllBook storedBook={storedBook} key={idx} />)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default BookList;