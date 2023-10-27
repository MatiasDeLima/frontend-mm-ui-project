import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Routers from "../../router/Routers";

const Layout = () => {
  return (
    <>
      <div className="grid__container">
        <SideBar />
        <Header />
        <div className="main main__container">
          <div className="container">
            <Routers />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
