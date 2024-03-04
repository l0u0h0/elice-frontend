// React, Router
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
// Styled
import GlobalStyles from "./styles/global.style";
// WebVitals
import reportWebVitals from "./reportWebVitals";
// Component
import CoursePage from "./pages/CoursePage";
import ErrorComponent from "./components/common/ErrorComponent";
// Jotai
import { Provider } from "jotai";

// Routing 설정
const router = createBrowserRouter([{ path: "/", element: <CoursePage /> }]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary FallbackComponent={ErrorComponent}>
    <Provider>
      <React.StrictMode>
        <GlobalStyles />
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  </ErrorBoundary>
);

reportWebVitals();
