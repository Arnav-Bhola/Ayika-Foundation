import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/Root";
import ErrorPage from "./pages/404";
import HomePage from "./pages/Home";
import TeamPage from "./pages/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "team",
        element: <TeamPage />,
      },
    ],
  },
]);

export default router;
