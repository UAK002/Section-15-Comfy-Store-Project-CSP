import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  // return <h1 className="text-4xl">HomeLayout</h1>;

  return (
    <>
      <nav>
        <span className="text-4xl text-primary">comfy</span>
      </nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
