import { NavLink, useLoaderData } from "react-router-dom";
import BookCard from "../../components/BookCard/BookCard";

const Home = () => {
    const booksData = useLoaderData();
    return (
        <div className="p-3">
            <div className="mt-12 flex justify-between items-center flex-col-reverse sm:flex-row gap-10 section-bg p-8 md:p-16 lg:p-28 rounded-3xl">
                <div>
                    <h1 className="font-bold text-4xl lg:text-6xl">Book to freshen up your bookshelf</h1>
                    <NavLink to={'/bookList'} className="btn primary-bg text-white mt-10">View The List</NavLink>
                </div>
                <div className="w-1/2">
                    <img src={"https://i.ibb.co/njFPrxK/a.jpg"} alt="" className="rounded-lg w-full md:w-4/5" />
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