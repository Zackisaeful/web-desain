import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {


  const location = useLocation();

  useEffect(() => {
    console.clear();

    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar id="top" />
      <main className="flex flex-col min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
