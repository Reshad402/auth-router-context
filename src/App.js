import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Layouts/Main";
import Help from "./Components/Help";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Orders from "./Orders.js/Orders";
import PrivateRoute from "./Orders.js/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/Register",
          element: <Register></Register>,
        },
        {
          path: "/help",
          element: <Help></Help>,
        },
        {
          path: "/orders",
          element: <PrivateRoute><Orders></Orders></PrivateRoute>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
