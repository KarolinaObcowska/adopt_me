import { useAuth } from "../../hooks/useAuth";
import RouteItem from "./RouteItem";

const PrivateRoute = ({ setNavbarOpen }) => {
  const { logout } = useAuth();
  return (
    <div>
      <RouteItem
        clickHandle={() => setNavbarOpen(false)}
        location="/animals"
        text="Home"
      />
      <RouteItem
        clickHandle={() => setNavbarOpen(false)}
        location="/animals/add"
        text="Add Animal"
      />
      <button
        onClick={logout}
        className="inline-block text-xl px-4 py-2 leading-none border-transparent border-b rounded text-white hover:border-yellow-400 m-3"
      >
        Logout
      </button>
    </div>
  );
};

export default PrivateRoute;
