import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Artsy</title>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header className="sticky top-0">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
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