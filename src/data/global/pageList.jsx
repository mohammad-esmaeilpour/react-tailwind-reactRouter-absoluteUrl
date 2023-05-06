import NoPage from "pages/404";
import Blog from "pages/Blog";
import Home from "pages/Home";

export const pagesList = [
  {
    path: "/",
    page: <Home />,
  },
  {
    path: "blog",
    page: <Blog />,
  },
  {
    path: "*",
    page: <NoPage />,
  },
];
