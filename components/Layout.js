import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";

function Layout({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const navbarVisible = useSelector((state) => state.general.navbarVisible);
  const footerVisible = useSelector((state) => state.general.footerVisible);

  const [MobileNav, setMobileNav] = useState(false);
  const [isVisible, setIsVisible] = useState();
  const [lastscroll, setLastscroll] = useState(0);
  // console.log(router.pathname, window.pageYOffset);

  function ControlNavbar() {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastscroll) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
    setLastscroll(window.scrollY); // => scroll position
    // console.log(window.scrollY, lastscroll, isVisible);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", ControlNavbar);
    }

    //clean up
    return () => {
      window.removeEventListener("scroll", ControlNavbar);
    };
  }, [lastscroll]);

  return (
    <div className="">
      <Head>
        <title>Artsy</title>
      </Head>
      <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&f[]=clash-display@200,400,700,500,600,1,300&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      ></link>

      <header
        className={`sticky ${isVisible ? "top-0" : ""} z-50 overscroll-none `}
      >
        <Navbar MobileNav={MobileNav} setMobileNav={setMobileNav} />
      </header>
      {MobileNav ? (
        ""
      ) : (
        <main>
          <ToastContainer />
          {children}
        </main>
      )}
      <footer>
        {/* {router.pathname == "/Checkout" ? "" : <Footer />} */}
        {footerVisible ? <Footer /> : ""}
      </footer>
    </div>
  );
}

export default Layout;

// const Layout = ({ children }) => {
//   return (
//     <div className="w-full">
//       <Head>
//         <title>Badak Store</title>
//       </Head>
//       <header className="sticky top-0 ">
//         <Navbar />
//       </header>
//       <main className="">{children}</main>
//       <footer className="">
//         <Footer />
//       </footer>
//     </div>
//   );
// };
