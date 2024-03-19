// import react library
import ReactDOM from "react-dom/client";
// import app component
import App from "./App.jsx";
// import css file
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutMe from "./pages/AboutMe.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import ContactMe from "./pages/ContactMe.jsx";
import Resume from "./pages/Resume.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <ContactMe />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);

// create root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
