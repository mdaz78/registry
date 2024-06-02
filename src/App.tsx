import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import Root from "./pages/Root";
import SearchPage from "./pages/SearchPage";

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
      },
      {
        path: "/packages/:name",
        element: <DetailsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
