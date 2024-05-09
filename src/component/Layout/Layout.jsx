import React from "react";
import Navbar from "./Navbar";
import Registration from "../../Auth/Signup";
import toast, { Toaster } from 'react-hot-toast';
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Toaster />
    </div>
  );
};

export default Layout;
