import RouteItem from "./RouteItem";
const PublicRoute = ({ setNavbarOpen }) => {
  return (
    <div>
      <RouteItem
        location="/animals"
        text="Animals for adopt"
        handleClick={() => setNavbarOpen(false)}
      />
      <RouteItem
        location="/auth/login"
        text="Login"
        handleClick={() => setNavbarOpen(false)}
      />
      <RouteItem
        location="/auth/signup"
        text="Sign Up"
        handleClick={() => setNavbarOpen(false)}
      />
    </div>
  );
};

export default PublicRoute;
