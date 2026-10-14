import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between">
      Main Layout
      <Outlet></Outlet>
    </div>
  );
};
