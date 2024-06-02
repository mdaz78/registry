import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  return (
    <div className="">
      <Header />
      <div className="container p-20 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
