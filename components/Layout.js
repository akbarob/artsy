import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
// import { setNavbarVisibility,na } from "../Redux/generalSlice";
function Layout({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const navbarVisible = useSelector((state) => state.general.navbarVisible);
  const footerVisible = useSelector((state) => state.general.footerVisible);

  const [MobileNav, setMobileNav] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  console.log(router.pathname);

  const listenToScroll = () => {
    let heightToHideFrom = 390;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [listenToScroll]);

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
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      ></link>

      <header className="sticky top-0 z-50 overscroll-none ">
        {isVisible && navbarVisible && (
          <Navbar MobileNav={MobileNav} setMobileNav={setMobileNav} />
        )}
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
