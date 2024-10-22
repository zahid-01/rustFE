import { useEffect, useState } from "react";
import { getUser, login, logout } from "../../utils/api";
import { NavLink } from "react-router-dom";
import { clearLogin, setLogin } from "../../Store/login";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((response) => {
        dispatch(setLogin(response.data));
        setUser(response.data);
      })
      .catch(() => {
        setUser(null);
      });
  }, [dispatch]);

  const handleLogout = () => {
    logout()
      .then((res) => {
        window.location.reload();
        dispatch(clearLogin());
      })
      .catch((error) => {
        dispatch(clearLogin());
        console.error("Logout error:", error);
      });
  };

  return user ? (
    <div>
      <h1>Welcome, {user.displayName}</h1>
      <img src={user.photos[0].value} alt="User Avatar" />
      <NavLink to={"/inventory"}>
        <button>Fetch my inventory</button>
      </NavLink>
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <button onClick={login}>Login with Steam</button>
  );
};

export default Login;
