import React from "react";
import { useUser } from "./context";

const Header = ({ user }) => {
  const { name, loggedIn } = useUser();
  return (
    <header>
      <a href="#">Home</a> Hello, {name} you are{" "}
      {loggedIn ? "logged in" : "anonymous"}!
    </header>
  );
};

export default Header;
