import RouteItem from "./RouteItem";
const PublicRoute = ({ setNavbarOpen, isOpen }) => {
  return (
    <div >
      <RouteItem location='/animals' text='Animals for adopt' handleClick={() => setNavbarOpen(!isOpen)} />
      <RouteItem location='/auth/login' text='Login' handleClick={() => setNavbarOpen(!isOpen)} />
      <RouteItem location='/auth/signup' text='Sign Up' handleClick={() => setNavbarOpen(!isOpen)} />
    </div>
  );
};

export default PublicRoute;
