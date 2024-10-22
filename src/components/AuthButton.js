const AuthButton = ({ user, onLogin, onLogout }) => {
  return user ? (
    <div>
      <h1>Welcome, {user.displayName}</h1>
      <img src={user.photos[0].value} alt="User Avatar" />
      <button onClick={onLogout}>Logout</button>
    </div>
  ) : (
    <button onClick={onLogin}>Login with Steam</button>
  );
};

export default AuthButton;
