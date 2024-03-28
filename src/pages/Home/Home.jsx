import { NavLink } from "react-router-dom"
import BookCard from "../../components/BookCard/BookCard";
import { useEffect, useState } from "react";

const Home = () => {
    const [booksData, setBooksData] = useState([]);
    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setBooksData(data));
    }, [])
    return (
        <div className="p-3">
            <div className="mt-3 md:mt-12 flex justify-between items-center flex-col-reverse sm:flex-row gap-10 section-bg p-8 md:p-16 lg:p-28 rounded-3xl">
                <div>
                    <h1 className="font-bold text-4xl lg:text-7xl">Book to freshen up your bookshelf</h1>
                    <NavLink to={'/bookList'} className="btn primary-bg text-white mt-10">View The List</NavLink>
                </div>
                <div className="w-1/2">
                    <img src={"https://i.ibb.co/njFPrxK/a.jpg"} alt="" className="rounded-lg w-full sm:w-3/5 md:w-9/12 h-full" />
                </div>
            </div>
            <section className="mt-12">
                <h2 className="font-bold text-4xl text-center">Books</h2>
                <div className="mt-5 grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {
                        booksData.map((book, indx) => <BookCard key={indx} book={book}></BookCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;