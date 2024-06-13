import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AddPost from "./pages/AddPost.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import { ProtectedRoute, Login, Signup } from "./components/index.js";

// Routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: (
          <ProtectedRoute authentication={false}>
            <Login />
          </ProtectedRoute>
        ),
      },

      {
        path: "/signup",
        element: (
          <ProtectedRoute authentication={false}>
            <Signup />
          </ProtectedRoute>
        ),
      },

      {
        path: "/all-posts",
        element: (
          <ProtectedRoute authentication={""}>
            <AllPosts />
          </ProtectedRoute>
        ),
      },

      {
        path: "/add-post",
        element: (
          <ProtectedRoute authentication={""}>
            <AddPost />
          </ProtectedRoute>
        ),
      },

      {
        path: "/edit-post/:slug",
        element: (
          <ProtectedRoute authentication={""}>
            <EditPost />
          </ProtectedRoute>
        ),
      },

      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
