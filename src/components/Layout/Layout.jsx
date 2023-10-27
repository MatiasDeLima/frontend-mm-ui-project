import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Routers from "../../router/Routers";

const Layout = () => {
  return (
    <>
      <div className="grid__container">
        <SideBar />
        <Header />
        <Routers />
      </div>
    </>
  );
};

export default Layout;
