import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// import Navbar from "./components/Navbar";
// import Login from "./pages/Auth/Login";
import Inventory from "./pages/Steam/Inventory";
import { getUser } from "./utils/api";
import { clearLogin, setLogin } from "./Store/login";
import Home from "./pages/Main/Home";
import CoinFlip from "./pages/Games/CoinFlip/CoinFlip";
import ReactModal from "react-modal";
import Play from "./pages/Play/Play";
import Navbar from "./components/Navbar/Navbar.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        {/* <Navbar1 /> */}
        {/* <Navbar /> */}
        {/* <LandingPage /> */}
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <LandingPage />

      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/coin",
        element: <CoinFlip />,
      },
      {
        path: "/play",
        element: <Play />,
      },
    ],
  },
]);

ReactModal.setAppElement("#root");
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUser()
      .then(
        (response) => {
          dispatch(setLogin(response.data));
        },
        (err) => {
          console.log(err);
        }
      )
      .catch(() => {
        clearLogin();
      });
  }, [dispatch]);

  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
