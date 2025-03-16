import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

const LayOut = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default LayOut;
