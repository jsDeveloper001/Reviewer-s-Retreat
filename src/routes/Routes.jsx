import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import BookDetails from "../pages/BookDetails/BookDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import BookList from "../pages/BookList/BookList";
import Statistics from "../pages/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookList",
        element: <BookList />,
        loader: () => fetch('/Books.json')
      },
      {
        path: '/statistics',
        element: <Statistics />,
        loader: () => fetch('/Books.json')
      },
      {
        path: "/books/:bookId",
        element: <BookDetails />,
        loader: () => fetch('/Books.json')
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;