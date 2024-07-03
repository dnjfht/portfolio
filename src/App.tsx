import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./page/Root";
import NotFoundPage from "./page/NotFoundPage";
import Main from "./page/Main";
import About from "./page/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <Main /> },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
