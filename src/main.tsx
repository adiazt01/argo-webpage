import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { LandingPage } from "./pages/LandingPage";
import { BlogProvider } from "./context/BlogContext";
import { BlogPage } from "./pages/BlogPage";
import "./style/animations/AnimationScroll.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Could not find root element");
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/blog",
      element: <BlogPage />,
    },
  ],
  {
    basename: "/argo-webpage",
  },
);

ReactDOM.createRoot(rootElement).render(
  /*   <React.StrictMode> */
  <BlogProvider>
    <RouterProvider router={router} />
  </BlogProvider>,
  /*   </React.StrictMode>, */
);
