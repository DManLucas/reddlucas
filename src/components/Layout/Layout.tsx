import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/clientApp";
import useAuth from "../../hooks/useAuth";
import Navbar from "../Navbar/Navbar";
import AuthModal from "../Modal/Auth/AuthModal";

type Props = {
  children: React.ReactNode;
};

const layout: React.FC<Props> = ({ children }) => {
  useAuth();
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default layout;
