import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Root from "./pages/Root";
import DetailsPage from "./pages/details/DetailsPage";
import { detailsLoader } from "./pages/details/detailsLoader";
import SearchPage from "./pages/search/SearchPage";
import { searchLoader } from "./pages/search/searchLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: "/packages/:name",
        element: <DetailsPage />,
        loader: detailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
