import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div>
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

      <header className="sticky top-0">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>{router.pathname == "/Checkout" ? "" : <Footer />}</footer>
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
