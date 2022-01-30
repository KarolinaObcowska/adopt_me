import { Link } from "react-router-dom";

const RouteItem = ({ handleClick, location, text }) => {
  return (
    <Link
      to={location}
      onClick={handleClick}
      className="block m-4 border-transparent border-b rounded text-white hover:border-yellow-400 text-xl"
    >
      {text}
    </Link>
  );
};

export default RouteItem;
