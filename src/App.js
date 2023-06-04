import { createBrowserRouter, Navigate, RouterProvider, } from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';

function App() {
  const authControl = JSON.parse(localStorage.getItem("userData"))
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Home />),
    },
    {
      path: "/register",
      element: (authControl ? <Navigate to="/" /> : <Register />),
    },
    {
      path: "/login",
      element: (authControl ? <Navigate to="/" /> : <Login />),
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
