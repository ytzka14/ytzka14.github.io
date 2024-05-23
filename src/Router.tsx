import { Navigate, createBrowserRouter } from "react-router-dom";
import GachaApp from "./gacha/GachaApp";
import BlogApp from "./blog/BlogApp";
import FilesApp from "./files/FilesApp";
import KaraokeApp from "./karaoke/KaraokeApp";
import Home from "./Home";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "gacha",
        element: <GachaApp />,
      },
      {
        path: "blog",
        element: <BlogApp />,
      },
      {
        path: "files",
        element: <FilesApp />,
      },
      {
        path: "karaoke",
        element: <KaraokeApp />,
      },
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace/>
  }
]);

export default router;