import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChordBuilder } from "./components/chord-builder/ChordBuilder.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChordBuilder />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
