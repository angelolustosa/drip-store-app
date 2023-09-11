import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { MenuBar } from "./components/header/MenuBar";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <>
      {/* <Home /> */}
      <MenuBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
