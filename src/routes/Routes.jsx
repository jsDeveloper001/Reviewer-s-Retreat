import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import BookDetails from "../pages/BookDetails/BookDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";

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
        element: <h2>List</h2>,
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