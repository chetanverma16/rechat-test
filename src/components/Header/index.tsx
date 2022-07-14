import React from "react";

type headerProps = {
  location: String;
};
const Header = ({ location }: headerProps) => {
  return (
    <header className="h-16 w-full bg-blue-500 text-white flex items-center justify-center">
      <h1 className="text-lg">Task Management {` > ${location}`}</h1>
    </header>
  );
};

export default Header;
