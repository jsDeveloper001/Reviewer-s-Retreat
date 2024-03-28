import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import BookDetails from "../pages/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
    ],
  },
]);

export default router;