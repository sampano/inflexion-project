import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Tables from "./pages/tables/Tables";
import Users from "./pages/users/Users";
import "./styles/global.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  link,
} from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/inflexion-project/",
      element: <Layout />,
      children: [
        {
          path: "/inflexion-project/",
          element: <Home />,
        },
        {
          path: "/inflexion-project/tables",
          element: <Tables />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
