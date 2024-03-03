// React, Router
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Styled
import GlobalStyles from "./styles/global.style";
// WebVitals
import reportWebVitals from "./reportWebVitals";
// Component
import CoursePage from "./pages/CoursePage";

// Routing 설정
const router = createBrowserRouter([{ path: "/", element: <CoursePage /> }]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
