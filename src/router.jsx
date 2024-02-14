import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/Root";
import ErrorPage from "./pages/404";
import HomePage from "./pages/Home";
import TeamPage from "./pages/Team";
import ProjectsPage from "./pages/Projects";
import Gallery from "./pages/Gallery";

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
      { path: "gallery", element: <Gallery /> },
      { path: "projects", element: <ProjectsPage /> },
    ],
  },
]);

export default router;
