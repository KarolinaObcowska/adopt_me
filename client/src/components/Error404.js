import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div>
      <div className="w-9/12 m-auto py-16 min-h-screen flex px-2 items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-7xl font-bold text-yellow-400">404</h1>
            <h1 className="text-4xl font-medium py-8 text-green-900">
              Page not found
            </h1>
            <p className="text-md pb-8 px-12 font-medium text-gray-800">
              Oops! The page you are looking for does not exist. <br /> It might
              have been moved or deleted.
            </p>
            <Link
              to="/"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold px-6 py-3 rounded-md mr-6"
            >
              Back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
