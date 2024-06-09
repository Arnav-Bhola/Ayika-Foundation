import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/Root";
import ProjectLayout from "./layouts/Project";
import ErrorPage from "./pages/404";
import HomePage from "./pages/Home";
import TeamPage from "./pages/Team";
import ProjectsPage from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Gallery from "./pages/Gallery";
import Recognitions from "./pages/Recognitions";
import About from "./pages/About";

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
      { path: "recognitions", element: <Recognitions /> },
      { path: "about", element: <About /> },
      {
        path: "projects",
        element: <ProjectLayout />,
        children: [
          { index: true, element: <ProjectsPage /> },
          { path: ":id", element: <ProjectDetail /> },
        ],
      },
    ],
  },
]);

export default router;
